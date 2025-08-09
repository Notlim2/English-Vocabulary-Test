"use client";

import { gql, useQuery } from "@apollo/client";
import {
  Container,
  Divider,
  Stack,
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Alert,
  CircularProgress,
  Box,
} from "@mui/material";
import dayjs from "dayjs";
import Link from "next/link";
import { useMemo } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const LIST_SESSIONS = gql`
  query listSessions {
    listSessions {
      id
      startDate
      endDate
      difficult
      sessionWords {
        id
        word {
          term
          definition
          example
        }
        sessionWordAnswers {
          answer
          isCorrect
          createdAt
        }
        createdAt
      }
    }
  }
`;

export default function Sessions() {
  const { data, loading, error } = useQuery(LIST_SESSIONS);
  const name = useMemo(() => {
    return localStorage.getItem("name") || "Desconhecido";
  }, []);
  return (
    <Container sx={{ py: 2 }}>
      <Stack spacing={1}>
        <Typography variant="h4" textAlign="center">
          Bem vindo {name}!
        </Typography>
        <Divider />
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ px: 1 }}
        >
          <Typography variant="h6">Minhas Sessões</Typography>
          <Link href="/sessions/create">
            <Button type="button" variant="contained">
              Nova Sessão
            </Button>
          </Link>
        </Stack>
        <Divider />
        <Stack spacing={1}>
          {!!error && (
            <Alert severity="error">
              Houve um problema ao buscar suas sessões. Tente novamente mais
              tarde!
            </Alert>
          )}
          {!!loading && (
            <Stack alignItems="center" sx={{ p: 2 }}>
              <CircularProgress />
            </Stack>
          )}
          {!!data?.listSessions?.length &&
            data.listSessions.map(
              (s: {
                id: number;
                startDate: string;
                endDate: string;
                difficult: string;
                sessionWords: {
                  id: number;
                  word: { term: string; definition: string; example: string };
                  sessionWordAnswers: {
                    answer: string;
                    isCorrect: boolean;
                    createdAt: string;
                  }[];
                }[];
              }) => (
                <Accordion key={s.id}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Grid
                      sx={{ width: "100%" }}
                      size={{ xs: 12 }}
                      spacing={0.5}
                      container
                    >
                      <Grid size={{ xs: 12, sm: 4 }}>
                        <Typography variant="body2">
                          Inicio:{" "}
                          {dayjs(s?.startDate).format("DD/MM/YYYY HH:mm:ss")}
                        </Typography>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 4 }}>
                        <Typography variant="body2">
                          Fim: {dayjs(s?.endDate).format("DD/MM/YYYY HH:mm:ss")}
                        </Typography>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 4 }}>
                        <Typography variant="body2">
                          Acertou:{" "}
                          {s?.sessionWords
                            ?.flatMap?.((sw) =>
                              sw.sessionWordAnswers?.map?.(
                                (swa) => swa.isCorrect
                              )
                            )
                            .reduce(
                              (count, value) => count + (value ? 1 : 0),
                              0
                            )}{" "}
                          Questões
                        </Typography>
                      </Grid>
                    </Grid>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Stack spacing={1}>
                      <Divider />
                      {s?.sessionWords?.map?.((sw) => (
                        <Grid
                          container
                          size={{ xs: 12 }}
                          key={sw.id}
                          spacing={1}
                        >
                          <Grid size={{ xs: 12, sm: 9 }}>
                            <Stack>
                              <Box>
                                <Typography
                                  variant="body2"
                                  fontWeight="bold"
                                  display="inline"
                                >
                                  Palavra:{" "}
                                </Typography>
                                <Typography variant="body2" display="inline">
                                  {sw?.word?.term}
                                </Typography>
                              </Box>
                              <Box>
                                <Typography
                                  variant="body2"
                                  fontWeight="bold"
                                  display="inline"
                                >
                                  Definição:{" "}
                                </Typography>
                                <Typography variant="body2" display="inline">
                                  {sw?.word?.definition}
                                </Typography>
                              </Box>
                              <Box>
                                <Typography
                                  variant="body2"
                                  fontWeight="bold"
                                  display="inline"
                                >
                                  Exemplo:{" "}
                                </Typography>
                                <Typography variant="body2" display="inline">
                                  {sw?.word?.example}
                                </Typography>
                              </Box>
                            </Stack>
                          </Grid>
                          <Grid size={{ xs: 12, sm: 3 }}>
                            <Stack
                              direction="row"
                              alignItems="center"
                              spacing={1}
                            >
                              <Typography
                                variant="body2"
                                fontWeight="bold"
                                display="inline"
                              >
                                Resposta:
                              </Typography>
                              <Typography variant="body2" display="inline">
                                <Stack
                                  direction="row"
                                  alignItems="center"
                                  spacing={0.5}
                                >
                                  <Typography>
                                    {
                                      sw?.sessionWordAnswers?.find?.(
                                        (swa) => swa.answer
                                      )?.answer
                                    }
                                  </Typography>
                                  <Typography>
                                    {sw?.sessionWordAnswers?.find?.(
                                      (swa) => swa.answer
                                    )?.isCorrect ? (
                                      <CheckIcon color="success" />
                                    ) : (
                                      <CloseIcon color="error" />
                                    )}
                                  </Typography>
                                </Stack>
                              </Typography>
                            </Stack>
                          </Grid>
                          <Grid size={{ xs: 12 }}>
                            <Divider />
                          </Grid>
                        </Grid>
                      ))}
                    </Stack>
                  </AccordionDetails>
                </Accordion>
              )
            )}
        </Stack>
      </Stack>
    </Container>
  );
}
