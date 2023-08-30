"use client";
import { ReactElement } from "react";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Montserrat } from "next/font/google";
import NextLink from "next/link";

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
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import { FilledInput, InputLabel } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";

export type RegistrationInputs = {
  email: string;
  name: string;
  lastname: string;
  password: string;
  address: string;
};
export default function Registration(): ReactElement {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegistrationInputs>({
    mode: "onBlur",
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };
  const onSubmit = async (data: RegistrationInputs) => {
    createCustomer({
      email: data.email,
      password: data.password,
      name: data.name,
      lastname: data.lastname,
      address: data.address,
    })
      .then(() => {
        loginUser({ email: data.email, password: data.password }).then(() => {
          reset();
        });
      })
      .catch((error) => {
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
      <Container
        maxWidth="xs"
        disableGutters={true}
        sx={{
          width: "480px",
          maxWidth: "480px",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Box component="form" sx={{ padding: "30px 0" }} margin="normal">
          <Stack direction="row" justifyContent="center" columnGap="10px">
            <Typography>Уже есть учетная запись?</Typography>
            <Link
              href="/auth/login"
              component={NextLink}
              underline="none"
              fontSize="20px"
              fontWeight="500"
              color="secondary"
            >
              Войти
            </Link>
          </Stack>

          <FormControl fullWidth variant="filled" sx={{ mt: "20px" }}>
            <InputLabel htmlFor="email-input">E-mail</InputLabel>
            <FilledInput
              placeholder="example@email.ru"
              {...register("email", {
                required: {
                  value: true,
                  message: "E-mail не может быть пустым",
                },
                validate: {
                  hasSpace: (value) =>
                    /^[^\s]+(\s+[^\s]+)*$/.test(value) ||
                    "Адрес электронной почты не должен содержать начальные или конечные пробелы",
                  hasDomain: (value) =>
                    /[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value) ||
                    "Адрес электронной почты должен содержать доменное имя (например, example.com)",
                  hasDogSymbol: (value) =>
                    /@/.test(value) ||
                    "Адрес электронной почты должен содержать @",
                  hasIncorrect: (value) =>
                    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
                      value,
                    ) || "Некорректный e-mail",
                },
              })}
            />
            {errors?.email ? (
              <FormHelperText error>
                {errors?.email && (
                  <Typography variant="body2" component="span">
                    {errors.email?.message || "Error"}
                  </Typography>
                )}
              </FormHelperText>
            ) : (
              <FormHelperText>
                <Typography variant="body2" component="span">
                  Мы вышлем на него подтверждение заказа
                </Typography>
              </FormHelperText>
            )}
          </FormControl>
          <FormControl fullWidth variant="filled" margin="normal">
            <InputLabel htmlFor="name-input">Имя</InputLabel>
            <FilledInput
              id="firstname"
              aria-describedby="name-input-text"
              autoComplete="given-name"
              {...register("name", {
                required: {
                  value: true,
                  message: "Имя не может быть пустым",
                },
                minLength: 1,
                validate: {
                  hasNoSymbols: (value) =>
                    /[a-zA-Zа-яА-я]/g.test(value) ||
                    "Имя не должно содержать специальные символы или цифры",
                },
              })}
            ></FilledInput>
            <FormHelperText error>
              {errors?.name && (
                <Typography variant="body2" component="span">
                  {errors.name?.message || "Error"}
                </Typography>
              )}
            </FormHelperText>
          </FormControl>

          <FormControl fullWidth variant="filled" margin="normal">
            <InputLabel htmlFor="lastname-input">Фамилия</InputLabel>
            <FilledInput
              id="lastname"
              aria-describedby="name-input-text"
              autoComplete="given-name"
              {...register("lastname", {
                required: {
                  value: true,
                  message: "Фамилия не может быть пустой",
                },
                minLength: 1,
                validate: {
                  hasNoSymbols: (value) =>
                    /[a-zA-Zа-яА-я]/g.test(value) ||
                    "Фамилия не должна содержать специальные символы или цифры",
                },
              })}
            ></FilledInput>
            <FormHelperText error>
              {errors?.lastname && (
                <Typography variant="body2" component="span">
                  {errors.lastname?.message || "Error"}
                </Typography>
              )}
            </FormHelperText>
          </FormControl>
          <FormControl variant="filled" fullWidth margin="normal">
            <InputLabel htmlFor="password-input">Пароль</InputLabel>
            <FilledInput
              id="password"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              aria-describedby="password-input-text"
              fullWidth
              {...register("password", {
                validate: {
                  isUpper: (value) =>
                    /[A-ZА-Я]/.test(value) ||
                    "Пароль должен содержать хотя бы одну заглавную букву (A-Z, А-Я)",
                  isLower: (value) =>
                    /[a-zа-я]/.test(value) ||
                    "Пароль должен содержать хотя бы одну строчную букву (a-z, а-я)",
                  isNumber: (value) =>
                    /[0-9]/.test(value) ||
                    "Пароль должен содержать как минимум одну цифру (0-9)",
                  hasSpace: (value) =>
                    /^[-a-zA-Zа-яА-я0-9-()!@#$%^&*_]+(\s+[-a-zA-Zа-яА-я0-9-()!@#$%^&*_]+)*$/.test(
                      value,
                    ) ||
                    "Пароль не должен содержать начальные или конечные пробелы",
                  hasSpecial: (value) =>
                    /[!@#$%^&*_]/.test(value) ||
                    "Пароль должен содержать хотя бы один специальный символ (например, ! @ # $ % ^ & * _ )",
                },
                minLength: {
                  value: 8,
                  message: "Пароль должен содержать минимум 8 символов",
                },
                required: {
                  value: true,
                  message: "Пароль не может быть пустым",
                },
              })}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            {errors?.password ? (
              <FormHelperText error id="component-helper-text">
                {errors?.password && (
                  <Typography variant="body2" component="span">
                    {errors.password?.message || "Error"}
                  </Typography>
                )}
              </FormHelperText>
            ) : (
              <FormHelperText>
                <Typography variant="body2" component="span">
                  Пароль должен содержать не менее 8 символов
                </Typography>
              </FormHelperText>
            )}
          </FormControl>
          <FormControl fullWidth variant="filled" margin="normal">
            <InputLabel htmlFor="lastname-input">Адрес доставки</InputLabel>
            <FilledInput
              id="address"
              aria-describedby="address-input-text"
              autoComplete="address"
              {...register("address", {
                required: {
                  value: true,
                  message: "Адрес не может быть пустой",
                },
                minLength: 1,
                validate: {
                  hasNoSymbols: (value) =>
                    /[a-zA-Zа-яА-я]/g.test(value) ||
                    "Адрес не должен содержать специальные символы или цифры",
                },
              })}
            ></FilledInput>
            <FormHelperText error>
              {errors?.address && (
                <Typography variant="body2" component="span">
                  {errors.address?.message || "Error"}
                </Typography>
              )}
            </FormHelperText>
          </FormControl>
          <Button
            sx={{ p: 2, mt: "25px", backgroundColor: "#8933CC" }}
            variant="contained"
            fullWidth={true}
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
