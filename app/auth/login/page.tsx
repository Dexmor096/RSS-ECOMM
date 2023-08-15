"use client";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import SocialNetwork from "components/socialNetwork/socialNetwork";
import NextLink from "next/link";

export default function Login() {
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
          <TextField id="filled-basic" label="E-mail" variant="filled" />
          <TextField
            id="filled-basic"
            label="password"
            type="password"
            variant="filled"
          />
          <Button sx={{ p: 2 }} variant="contained" color="secondary">
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
