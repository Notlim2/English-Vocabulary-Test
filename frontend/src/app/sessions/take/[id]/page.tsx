"use client";

import { gql, useMutation, useQuery } from "@apollo/client";
import {
  Alert,
  Button,
  Chip,
  CircularProgress,
  Container,
  Divider,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useParams } from "next/navigation";
import NextLink from "next/link";
import {
  MouseEventHandler,
  Suspense,
  useEffect,
  useMemo,
  useState,
} from "react";
import Countdown from "react-countdown";
import { SubmitHandler, useForm } from "react-hook-form";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

type SessionWordAnswerData = {
  answer: string;
};

const GET_SESSION = gql`
  query Session($data: GetSessionInput!) {
    getSession(data: $data) {
      id
      startDate
      endDate
      difficult
      sessionWords {
        id
        word {
          id
          example
          definition
        }
        sessionWordAnswers {
          id
          answer
          isCorrect
          createdAt
          sessionWord {
            word {
              term
            }
          }
        }
        createdAt
      }
    }
  }
`;

const CREATE_SESSION_WORD = gql`
  mutation SessionWord($data: CreateSessionWordInput!) {
    createSessionWord(data: $data) {
      id
      word {
        id
        example
        definition
      }
      createdAt
    }
  }
`;

const CREATE_SESSION_WORD_ANSWER = gql`
  mutation SessionWordAnswer($data: CreateSessionWordAnswerInput!) {
    createSessionWordAnswer(data: $data) {
      id
      answer
      isCorrect
      sessionWord {
        word {
          term
        }
      }
    }
  }
`;

export default function TakeSession() {
  const [sessionExpired, setSessionExpired] = useState(false);
  const { id } = useParams();
  const {
    data: getSessionData,
    loading: getSessionLoading,
    error: getSessionError,
    refetch: getSessionRefetch,
  } = useQuery(GET_SESSION, {
    variables: { data: { id: +id! } },
    skip: !id,
  });
  const [
    mutateCreateSessionWord,
    {
      data: createSessionWordData,
      loading: createSessionWordLoading,
      error: createSessionWordError,
    },
  ] = useMutation(CREATE_SESSION_WORD);
  const {
    resetField,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SessionWordAnswerData>();
  const [
    mutateCreateSessionWordAnswer,
    {
      reset: createSessionWordAnswerReset,
      data: createSessionWordAnswerData,
      loading: createSessionWordAnswerLoading,
      error: createSessionWordAnswerError,
    },
  ] = useMutation(CREATE_SESSION_WORD_ANSWER);
  const answer: SubmitHandler<SessionWordAnswerData> = (data) => {
    if (createSessionWordAnswerData) {
      return;
    }
    const { answer } = data;
    if (!answer) {
      return;
    }
    mutateCreateSessionWordAnswer({
      variables: { data: { answer, sessionWordId: +lastSessionWord.id } },
    });
  };
  const nextWord: MouseEventHandler = (e) => {
    e.stopPropagation();
    e.preventDefault();
    resetField("answer");
    createSessionWordAnswerReset();
    mutateCreateSessionWord({
      variables: { data: { sessionId: +getSessionData.getSession.id } },
    });
  };
  const lastSessionWord = useMemo(() => {
    if (!getSessionData?.getSession?.sessionWords?.length) {
      return;
    }
    const orderedSessionWords = [
      ...getSessionData.getSession.sessionWords,
    ].sort((sw1: { createdAt: string }, sw2: { createdAt: string }) =>
      new Date(sw1.createdAt).getTime() > new Date(sw2.createdAt).getTime()
        ? -1
        : 1
    );
    return orderedSessionWords[0];
  }, [getSessionData]);
  useEffect(() => {
    if (!getSessionData?.getSession?.id) {
      return;
    }
    const endDate = new Date(getSessionData?.getSession?.endDate);
    const expired = new Date().getTime() > endDate.getTime();
    if (expired) {
      setSessionExpired(true);
    } else if (!getSessionData?.getSession?.sessionWords?.length) {
      mutateCreateSessionWord({
        variables: { data: { sessionId: +getSessionData.getSession.id } },
      });
    }
  }, [getSessionData, mutateCreateSessionWord]);
  useEffect(() => {
    if (createSessionWordData?.createSession?.id) {
      return;
    }
    getSessionRefetch();
  }, [createSessionWordData, getSessionRefetch]);
  return (
    <Container>
      <Stack sx={{ minHeight: "calc(100vh - 8px)" }}>
        {getSessionLoading && (
          <Stack
            justifyContent="center"
            alignItems="center"
            sx={{ flexGrow: 1 }}
          >
            <CircularProgress />
          </Stack>
        )}
        {getSessionError && (
          <Alert severity="error">
            Houve um problema ao obter os dados da sessão. Tente novamente mais
            tarde!
          </Alert>
        )}
        {getSessionData && (
          <Stack>
            {sessionExpired && (
              <Alert severity="warning">
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  spacing={1}
                >
                  <Typography>O tempo de sua sessão expirou!</Typography>
                  <Link href="/sessions" component={NextLink}>
                    Voltar a lista de sessões
                  </Link>
                </Stack>
              </Alert>
            )}
            {!sessionExpired && (
              <Paper elevation={1} sx={{ px: 2, py: 1, mt: 1 }}>
                <Stack spacing={1}>
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography variant="h5">Do you know this word?</Typography>
                    <Typography variant="h5">
                      <Countdown
                        date={getSessionData.getSession.endDate}
                        renderer={({ minutes, seconds }) => (
                          <>
                            {("" + minutes).padStart(2, "0")}:
                            {("" + seconds).padStart(2, "0")}
                          </>
                        )}
                        onComplete={() => setSessionExpired(true)}
                      />
                    </Typography>
                  </Stack>
                  <Divider />
                  {createSessionWordLoading && (
                    <Stack
                      alignItems="center"
                      justifyContent="center"
                      flexGrow={1}
                    >
                      <CircularProgress />
                    </Stack>
                  )}
                  {createSessionWordError && (
                    <Alert severity="error">
                      Houve um problema ao obter a próxima palavra da sessão
                      atual. Tente novamente mais tarde!
                    </Alert>
                  )}
                  {lastSessionWord && (
                    <Suspense
                      fallback={
                        <Stack alignItems="center" justifyContent="center">
                          <CircularProgress />
                        </Stack>
                      }
                    >
                      <>
                        <Typography variant="body1">
                          &quot;{lastSessionWord.word.definition}&quot;
                        </Typography>
                        <Divider />
                        <Typography variant="h6">Example:</Typography>
                        <Typography variant="body1">
                          &quot;{lastSessionWord.word.example}&quot;
                        </Typography>
                        <form onSubmit={handleSubmit(answer)}>
                          <Stack spacing={1}>
                            {createSessionWordAnswerError && (
                              <Alert severity="error">
                                Houve um problema ao responder a questão. Tente
                                novamente mais tarde!
                              </Alert>
                            )}
                            <Stack direction="row" spacing={1}>
                              <TextField
                                label="Answer"
                                fullWidth
                                {...register("answer", {
                                  required: "Informe a resposta!",
                                })}
                                error={!!errors.answer}
                                helperText={errors.answer?.message}
                                required
                                disabled={
                                  !!lastSessionWord?.sessionWordAnswers?.length
                                }
                              />
                              {!createSessionWordAnswerData &&
                              !lastSessionWord?.sessionWordAnswers?.length ? (
                                <Button
                                  type="submit"
                                  variant="contained"
                                  color="success"
                                  loading={
                                    getSessionLoading ||
                                    createSessionWordAnswerLoading ||
                                    createSessionWordLoading
                                  }
                                >
                                  Guess
                                </Button>
                              ) : (
                                <Button
                                  variant="contained"
                                  type="button"
                                  onClick={nextWord}
                                  loading={
                                    getSessionLoading ||
                                    createSessionWordAnswerLoading ||
                                    createSessionWordLoading
                                  }
                                >
                                  Next Word
                                </Button>
                              )}
                            </Stack>
                            {createSessionWordAnswerData
                              ?.createSessionWordAnswer?.isCorrect == false ||
                            (lastSessionWord?.sessionWordAnswers?.length &&
                              !lastSessionWord.sessionWordAnswers.some(
                                (swa: { isCorrect: boolean }) => swa.isCorrect
                              )) ? (
                              <Stack
                                direction="row"
                                alignItems="center"
                                spacing={0.5}
                              >
                                <CloseIcon />
                                <Typography variant="caption" color="error">
                                  The word was{" "}
                                  <Chip
                                    label={
                                      createSessionWordAnswerData
                                        ?.createSessionWordAnswer?.sessionWord
                                        ?.word?.term ||
                                      lastSessionWord?.sessionWordAnswers?.find?.(
                                        (swa: { isCorrect: boolean }) =>
                                          swa.isCorrect
                                      )?.word?.term
                                    }
                                    color="success"
                                    size="small"
                                  />
                                </Typography>
                              </Stack>
                            ) : createSessionWordAnswerData
                                ?.createSessionWordAnswer?.isCorrect === true ||
                              lastSessionWord?.sessionWordAnswers?.some?.(
                                (swa: { isCorrect: boolean }) => swa.isCorrect
                              ) ? (
                              <Stack
                                direction="row"
                                alignItems="center"
                                spacing={0.5}
                              >
                                <CheckIcon color="success" />
                                <Typography variant="caption" color="success">
                                  Correct Answer
                                </Typography>
                              </Stack>
                            ) : null}
                          </Stack>
                        </form>
                      </>
                    </Suspense>
                  )}
                </Stack>
              </Paper>
            )}
          </Stack>
        )}
      </Stack>
    </Container>
  );
}
