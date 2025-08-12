/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import { gql, useMutation } from "@apollo/client";
import { MutationBaseOptions } from "@apollo/client/core/watchQueryOptions";
import {
  Alert,
  Button,
  Grid,
  Stack,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

const LOGIN = gql`
  mutation Login($data: LoginInput!) {
    login(data: $data) {
      access_token
      user {
        id
        email
        name
      }
    }
  }
`;

const SIGN_UP = gql`
  mutation Register($data: CreateUserInput!) {
    register(data: $data) {
      id
      name
      email
    }
  }
`;

type LoginCredentials = {
  email: string;
  password: string;
};

type SignUpData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type LoginProps = {
  mutateLogin: (params: MutationBaseOptions) => void;
  onClickSignUp: () => void;
  loginError: boolean;
  loginLoading: boolean;
};

function Login({
  onClickSignUp,
  mutateLogin,
  loginError,
  loginLoading,
}: LoginProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginCredentials>();
  const login: SubmitHandler<LoginCredentials> = async (
    credentials: LoginCredentials
  ) => {
    mutateLogin({
      variables: {
        data: {
          email: credentials.email,
          password: credentials.password,
        },
      },
    });
  };
  return (
    <form onSubmit={handleSubmit(login)} style={{ height: "100%" }}>
      <Stack justifyContent="center" spacing={1} sx={{ height: "100%" }}>
        {!!loginError && (
          <Alert severity="error">
            Houve um problema ao fazer login, tente novamente mais tarde!
          </Alert>
        )}
        <TextField
          type="email"
          label="E-mail"
          {...register("email", {
            required: "Informe um e-mail para fazer Login!",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Informe um e-mail válido!",
            },
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
          slotProps={{ inputLabel: { required: true } }}
        />
        <TextField
          type="password"
          label="Senha"
          {...register("password", {
            required: "Informe uma senha para fazer Login!",
          })}
          error={!!errors.password}
          helperText={errors.password?.message}
          slotProps={{ inputLabel: { required: true } }}
        />
        <Button type="submit" variant="contained" loading={loginLoading}>
          Fazer Login
        </Button>
        <Button
          type="button"
          color="secondary"
          variant="contained"
          onClick={onClickSignUp}
          loading={loginLoading}
        >
          Cadastrar-se
        </Button>
      </Stack>
    </form>
  );
}

type SignUpProps = {
  onClickLogin: () => void;
  mutateSignUp: (params: MutationBaseOptions) => void;
  signUpError: boolean;
  signUpLoading: boolean;
  loginError: boolean;
  loginLoading: boolean;
  signUpData: { register: { id: number; name: string; email: string } };
};

function SignUp({
  mutateSignUp,
  onClickLogin,
  signUpError,
  signUpLoading,
  loginError,
  loginLoading,
  signUpData,
}: SignUpProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpData>();
  const password = watch("password");
  const signUp: SubmitHandler<SignUpData> = async (data: SignUpData) => {
    mutateSignUp({
      variables: {
        data: {
          name: data.name,
          email: data.email,
          password: data.password,
        },
      },
    });
  };
  useEffect(() => {
    if (!signUpData?.register?.id) {
      return;
    }
    onClickLogin();
  }, [signUpData, onClickLogin]);
  return (
    <form onSubmit={handleSubmit(signUp)} style={{ height: "100%" }}>
      <Stack justifyContent="center" spacing={1} sx={{ height: "100%" }}>
        {!!(signUpError || loginError) && (
          <Alert severity="error">
            Houve um problema ao realizar o cadastro, tente novamente mais
            tarde!
          </Alert>
        )}
        <TextField
          type="text"
          label="Nome"
          {...register("name", {
            required: "Informe um nome para se cadastrar!",
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
          slotProps={{ inputLabel: { required: true } }}
        />
        <TextField
          type="email"
          label="E-mail"
          {...register("email", {
            required: "Informe um e-mail para se cadastrar!",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Informe um e-mail válido!",
            },
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
          slotProps={{ inputLabel: { required: true } }}
        />
        <TextField
          type="password"
          label="Senha"
          {...register("password", {
            minLength: {
              value: 6,
              message: "A senha deve possuir no mínimo 6 caracteres",
            },
            required: "Informe uma senha para se cadastrar!",
          })}
          error={!!errors.password}
          helperText={errors.password?.message}
          slotProps={{ inputLabel: { required: true } }}
        />
        <TextField
          type="password"
          label="Confirme a senha"
          {...register("confirmPassword", {
            minLength: {
              value: 6,
              message: "A senha deve possuir no mínimo 6 caracteres",
            },
            validate: (value) => {
              return value === password || "As senhas não coincidem";
            },
            required: "Confirme a senha para se cadastrar!",
          })}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword?.message}
          slotProps={{ inputLabel: { required: true } }}
        />
        <Button
          type="submit"
          variant="contained"
          loading={loginLoading || signUpLoading}
        >
          Cadastrar-se
        </Button>
        <Button
          type="button"
          color="secondary"
          variant="contained"
          onClick={onClickLogin}
          loading={loginLoading || signUpLoading}
        >
          Voltar para Login
        </Button>
      </Stack>
    </form>
  );
}

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [page, setPage] = useState<"LOGIN" | "SIGNUP">("LOGIN");
  const router = useRouter();
  const [
    mutateLogin,
    { data: loginData, loading: loginLoading, error: loginError },
  ] = useMutation(LOGIN);
  const [
    mutateSignUp,
    { data: signUpData, loading: signUpLoading, error: signUpError },
  ] = useMutation(SIGN_UP);
  useEffect(() => {
    if (typeof window === "undefined" || !loginData?.login?.access_token) {
      return;
    }
    localStorage?.setItem?.("token", loginData.login.access_token);
    if (loginData?.login?.user?.name) {
      localStorage?.setItem?.("name", loginData.login.user.name);
    }
    router.push("/sessions");
  }, [loginData, router]);
  return (
    <Stack sx={{ minHeight: "calc(100vh - 8px)" }}>
      <Grid container sx={{ flexGrow: 1 }}>
        {!isMobile && (
          <Grid size={{ xs: 0, md: 9 }}>
            <img
              src="https://picsum.photos/800/600"
              style={{ width: "100%", height: "100%" }}
            />
          </Grid>
        )}
        <Grid size={{ xs: 12, md: 3 }} sx={{ px: 1 }}>
          {page === "LOGIN" ? (
            <Login
              onClickSignUp={() => setPage("SIGNUP")}
              mutateLogin={mutateLogin}
              loginError={!!loginError}
              loginLoading={loginLoading}
            />
          ) : (
            <SignUp
              onClickLogin={() => setPage("LOGIN")}
              mutateSignUp={mutateSignUp}
              signUpError={!!signUpError}
              signUpLoading={signUpLoading}
              loginError={!!loginError}
              loginLoading={loginLoading}
              signUpData={signUpData}
            />
          )}
        </Grid>
      </Grid>
    </Stack>
  );
}
