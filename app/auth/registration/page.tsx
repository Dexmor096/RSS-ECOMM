import { ReactElement } from "react";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

export default function Registration(): ReactElement {
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
          // p: "30px 0",
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
          >
            Зарегистрироваться
          </Button>
        </Box>
      </Container>
    </Stack>
  );
}
