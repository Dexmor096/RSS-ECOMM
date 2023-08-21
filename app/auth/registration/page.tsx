"use client";
import { ReactElement } from "react";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Montserrat } from "next/font/google";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

import { useForm } from "react-hook-form";
import { loginUser } from "../functions/login";
import {
  createCustomer,
  handleRegistrationError,
} from "../functions/createCustomer";

export type RegistrationInputs = {
  email: string;
  name: string;
  lastname: string;
  password: string;
};
export default function Registration(): ReactElement {
  const { register, handleSubmit, reset } = useForm<RegistrationInputs>();
  const notify = () =>
    toast.success("🦄 Wow so easy!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const onSubmit = async (data: RegistrationInputs) => {
    createCustomer({
      email: data.email,
      password: data.password,
      name: data.name,
      lastname: data.lastname,
    })
      .then(() => {
        loginUser({ email: data.email, password: data.password }).then(() => {
          reset();
          notify();
        });
      })
      .catch((error) => {
        notify();
        handleRegistrationError(error);
      });
  };

  return (
    <Stack
      spacing={2}
      sx={{
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Container
        maxWidth="xs"
        sx={{
          height: "auto",
          width: "auto",
        }}
      ></Container>
      <Container
        disableGutters={true}
        sx={{
          width: "480px",
          maxWidth: "480px",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Box component="form" sx={{ padding: "30px 0" }}>
          <TextField
            id="E-mail"
            label="E-mail"
            variant="filled"
            fullWidth
            helperText="Мы вышлем на него подтверждение заказа"
            autoComplete="email"
            placeholder="example@email.ru"
            margin="normal"
            {...register("email", { required: true })}
          />
          <TextField
            id="name"
            label="Имя"
            variant="filled"
            autoComplete="given-name"
            fullWidth
            margin="normal"
            {...register("name", { required: true })}
          />
          <TextField
            id="lastname"
            label="Фамилия"
            variant="filled"
            autoComplete="family-name"
            fullWidth
            margin="normal"
            {...register("lastname", { required: true })}
          />
          <TextField
            id="password"
            label="Пароль"
            variant="filled"
            fullWidth
            type="password"
            autoComplete="new-password"
            helperText="Должно быть 10 символов или более"
            margin="normal"
            {...register("password", { required: true })}
          />
          <TextField
            id=""
            label="Адрес доставки"
            variant="filled"
            fullWidth
            helperText=""
            margin="normal"
          />
          <Button
            sx={{ p: 2, mt: "25px", backgroundColor: "#8933CC" }}
            variant="contained"
            fullWidth
            color="secondary"
            className={montserrat.className}
            onClick={handleSubmit(onSubmit)}
          >
            Зарегистрироваться
          </Button>
        </Box>
      </Container>
    </Stack>
  );
}
