"use client";
import { ReactElement } from "react";
import SocialNetwork from "components/socialNetwork/socialNetwork";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { apiRoot } from "../../../apiRoot";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import { FilledInput, InputLabel } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";

type RegistrationInputs = {
  email: string;
  name: string;
  lastname: string;
  password: string;
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
    console.log(data, errors);

    const createCustomer = () => {
      return apiRoot
        .customers()
        .post({
          body: {
            email: data.email,
            password: data.password,
          },
        })
        .execute();
    };
    createCustomer()
      .then(({ body }) => {
        console.log(body.customer.id);
        reset();
      })
      .catch(console.error);
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
        sx={{
          height: "auto",
          width: "auto",
          p: "10px 0",
        }}
      >
        <SocialNetwork description="зарегистрироваться через" />
      </Container>
      <Typography variant="subtitle2" color="inherit" sx={{ pl: 5, pr: 5 }}>
        Регистрация через профиль социальной сети выполняется очень быстро. Вам
        не придется запоминать новые пароли - никакой перегрузки для памяти. Не
        беспокойтесь, мы никогда не передадим ваши данные третьим лицам и не
        будем публиковать информацию от вашего имени
      </Typography>
      <Typography variant="h5" color="inherit" sx={{ pl: 0.5, pr: 0.5 }}>
        или зарегистрируйся с помощью электронной почты
      </Typography>
      <Container
        maxWidth="xs"
        sx={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Box component="form" sx={{ p: "20px" }} margin="normal">
          <FormControl fullWidth variant="filled">
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
          <Button
            sx={{ p: 2 }}
            variant="contained"
            fullWidth
            color="secondary"
            onClick={handleSubmit(onSubmit)}
          >
            Зарегистрироваться
          </Button>
        </Box>
      </Container>
    </Stack>
  );
}
