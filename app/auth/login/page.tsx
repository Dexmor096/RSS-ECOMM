import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

export default function Login() {
  return (
    <Box component="form">
      <Container
        disableGutters={true}
        sx={{
          maxWidth: "480px",
          width: "480px",
          height: "auto",
          alignItems: "center",
          justifyContent: "center",
          p: "40px 0",
        }}
      >
        <Stack spacing={3} sx={{ textAlign: "center" }}>
          <TextField id="filled-basic" label="E-mail" variant="filled" />
          <TextField
            id="filled-basic"
            label="password"
            type="password"
            variant="filled"
          />
          <Button
            sx={{ p: 2, mt: "25px", backgroundColor: "#8933CC" }}
            variant="contained"
            fullWidth
            color="secondary"
            className={montserrat.className}
          >
            Войти
          </Button>
          <Link href="#" underline="none" color="inherit">
            Забыли пароль?
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}
