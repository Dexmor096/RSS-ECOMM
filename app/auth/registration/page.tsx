
import { ReactElement } from "react";
import SocialNetwork from "../../../components/socialNetwork/socialNetwork";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Registration = (): ReactElement => {
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
        <Box component="form" sx={{ p: "20px" }}>
          <TextField
            id=""
            label="E-mail"
            variant="filled"
            fullWidth
            helperText="Мы вышлем на него подтверждение заказа"
            placeholder="example@email.ru"
            margin="normal"
          />
          <TextField
            id=""
            label="Имя"
            variant="filled"
            fullWidth
            margin="normal"
          />
          <TextField
            id=""
            label="Фамилия"
            variant="filled"
            fullWidth
            margin="normal"
          />
          <TextField
            id=""
            label="Пароль"
            variant="filled"
            fullWidth
            type="password"
            helperText="Должно быть 10 символов или более"
            margin="normal"
          />
          <Button sx={{ p: 2 }} variant="contained" fullWidth color="secondary">
            Зарегистрироваться
          </Button>
        </Box>
      </Container>
    </Stack>
  );
};

export default Registration;

export default function Registration() {
  return <h1>Registration</h1>;
}
