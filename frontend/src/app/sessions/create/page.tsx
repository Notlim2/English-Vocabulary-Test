"use client";

import { gql, useMutation } from "@apollo/client";
import {
  Container,
  Typography,
  Stack,
  Divider,
  Button,
  Autocomplete,
  TextField,
  FormControl,
  FormHelperText,
  Alert,
} from "@mui/material";
import { useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const CREATE_SESSION = gql`
  mutation Session($data: CreateSessionInput!) {
    createSession(data: $data) {
      id
      startDate
      endDate
      difficult
    }
  }
`;

type SessionDifficult = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

type CreateSessionData = {
  minutes: { label: string; value: number };
  difficult: { label: string; value: SessionDifficult };
};

export default function SessionCreate() {
  const { control, handleSubmit } = useForm<CreateSessionData>();
  const [mutate, { data, loading, error }] = useMutation(CREATE_SESSION);
  const router = useRouter();
  const createSession: SubmitHandler<CreateSessionData> = (data) => {
    return mutate({
      variables: {
        data: {
          minutes: data.minutes.value,
          difficult: data.difficult.value,
        },
      },
    });
  };
  useEffect(() => {
    if (!data?.createSession?.id) {
      return;
    }
    router.push(`/sessions/take/${data.createSession.id}`);
  }, [data, router]);
  return (
    <Container sx={{ py: 2 }}>
      <form onSubmit={handleSubmit(createSession)}>
        <Stack spacing={2}>
          <Typography variant="h4" textAlign="center">
            Iniciar Sessão
          </Typography>
          <Divider />
          <Stack spacing={1}>
            {!!error && (
              <Alert severity="error">
                Houve um problema ao tentar iniciar a sessão, tente novamente
                mais tarde!
              </Alert>
            )}
            <Controller
              control={control}
              name="minutes"
              rules={{ required: "Informe o tempo da sessão!" }}
              render={({ field, fieldState: { error } }) => (
                <Autocomplete
                  onChange={(_, value) => field.onChange(value)}
                  renderInput={(params) => (
                    <FormControl fullWidth>
                      <TextField {...params} label="Tempo da Sessão" />
                      {!!error && (
                        <FormHelperText error>{error.message}</FormHelperText>
                      )}
                    </FormControl>
                  )}
                  options={[
                    { label: "1 minuto", value: 1 },
                    { label: "2 minutos", value: 2 },
                    { label: "5 minutos", value: 5 },
                    { label: "10 minutos", value: 10 },
                  ]}
                />
              )}
            />
            <Controller
              control={control}
              name="difficult"
              rules={{ required: "Informe a dificuldade da sessão!" }}
              render={({ field, fieldState: { error } }) => (
                <Autocomplete
                  onChange={(_, value) => field.onChange(value)}
                  renderInput={(params) => (
                    <FormControl fullWidth>
                      <TextField {...params} label="Dificuldade" />
                      {!!error && (
                        <FormHelperText error>{error.message}</FormHelperText>
                      )}
                    </FormControl>
                  )}
                  options={[
                    { label: "A1 - Beginner", value: "A1" },
                    { label: "A2 - Elementary", value: "A2" },
                    { label: "B1 - Intermediate", value: "B1" },
                    { label: "B2 - Upper Intermediate", value: "B2" },
                    { label: "C1 - Advanced", value: "C1" },
                    { label: "C2 - Proficient", value: "C2" },
                  ]}
                />
              )}
            />
          </Stack>
          <Divider />
          <Button variant="contained" type="submit" loading={loading}>
            Iniciar
          </Button>
        </Stack>
      </form>
    </Container>
  );
}
