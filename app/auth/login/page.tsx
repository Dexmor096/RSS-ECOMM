"use client";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import SocialNetwork from "components/socialNetwork/socialNetwork";
import { apiRoot } from "../../../apiRoot";
import { useForm } from "react-hook-form";

type LoginInputs = {
  email: string;
  password: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    //formState: { errors },
    reset,
  } = useForm<LoginInputs>();

  const handleLogin = async (data: LoginInputs) => {
    const loginUser = () => {
      return apiRoot
        .login()
        .post({
          body: {
            email: data.email,
            password: data.password,
          },
        })
        .execute();
    };
    loginUser()
      .then(() => {
        reset();
        console.log("Вход выполнен успешно!");
      })
      .catch((error) => {
        if (error.statusCode == 400) {
          console.error("Ошибка 400!");
        } else {
          console.error("An unknown error occurred:", error);
        }
      });
  };

  return (
    <Box component="form">
      <Container
        maxWidth="xs"
        sx={{
          height: "auto",
          alignItems: "center",
          justifyContent: "center",
          p: "40px 0",
        }}
      >
        <Stack spacing={3} sx={{ textAlign: "center" }}>
          <TextField
            id="E-mail"
            label="E-mail"
            variant="filled"
            {...register("email", { required: true })}
          />
          <TextField
            id="password"
            label="password"
            type="password"
            variant="filled"
            {...register("password", { required: true })}
          />
          <Button
            sx={{ p: 2 }}
            variant="contained"
            color="secondary"
            onClick={handleSubmit(handleLogin)}
          >
            Войти
          </Button>
          <Link href="#" underline="none" color="inherit">
            Забыли пароль?
          </Link>
          <SocialNetwork description="или войди с помощью..." />
        </Stack>
      </Container>
    </Box>
  );
}
