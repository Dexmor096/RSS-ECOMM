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
import SocialNetwork from "components/socialNetwork/socialNetwork";
import { useForm } from "react-hook-form";

type FormInputs = {
  email: string;
  password: string;
};

export default function Login() {
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
                minLength: {
                  value: 5,
                  message: `min length 5`,
                },
                required: {
                  value: true,
                  message: "E-mail не может быть пустым",
                },
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Не корректный e-mail",
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
              type="password"
              aria-describedby="component-helper-text"
              {...register("password", {
                minLength: {
                  value: 8,
                  message: "Пароль должен содержать минимум 8 символов",
                },
                required: {
                  value: true,
                  message: "Пароль не может быть пустым",
                },
              })}
            />
            <FormHelperText error id="component-helper-text">
              {errors?.password && (
                <Typography variant="body1" component="span">
                  {errors.password?.message || "Error"}
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
          <Link href="#" underline="none" color="inherit">
            Забыли пароль?
          </Link>
          <SocialNetwork description="или войди с помощью..." />
        </Stack>
      </Container>
    </Box>
  );
}
