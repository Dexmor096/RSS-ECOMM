"use client";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import {
  FormControl,
  InputLabel,
  FilledInput,
  FormHelperText,
  Typography,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import NextLink from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";

type FormInputs = {
  email: string;
  password: string;
};

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInputs>({
    mode: "onBlur",
  });
  const onSubmit = (data: FormInputs) => console.log("data", data);
  console.log("errors", errors);
  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
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
          <FormControl variant="filled">
            <InputLabel htmlFor="component-helper">E-mail</InputLabel>
            <FilledInput
              fullWidth
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
                      value
                    ) || "Некорректный e-mail",
                },
              })}
            />
            <FormHelperText error id="component-helper-text">
              {errors?.email && (
                <Typography variant="body1" component="span">
                  {errors.email?.message || "Error"}
                </Typography>
              )}
            </FormHelperText>
          </FormControl>

          <FormControl variant="filled">
            <InputLabel htmlFor="component-helper">Password</InputLabel>
            <FilledInput
              fullWidth
              aria-describedby="component-helper-text"
              type={showPassword ? "text" : "password"}
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
                      value
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
            <FormHelperText error id="component-helper-text">
              {errors?.password && (
                <Typography variant="body1" component="span">
                  {errors.password?.message}
                </Typography>
              )}
            </FormHelperText>
          </FormControl>
          <Button
            type="submit"
            sx={{ p: 2 }}
            variant="contained"
            color="secondary"
          >
            Войти
          </Button>
          <Link href="/" component={NextLink} underline="none" color="inherit">
            Забыли пароль?
          </Link>
          <SocialNetwork description="или войди с помощью..." />
        </Stack>
      </Container>
    </Box>
  );
}
