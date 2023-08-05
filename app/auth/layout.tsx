import { ButtonGroup, Paper } from "@mui/material";
import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Paper
      elevation={8}
      sx={{
        width: "40vw",
        margin: "20px auto",
      }}
    >
      <Box sx={{ margin: "5px auto" }}>
        <Grid
          container
          spacing={2}
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <ButtonGroup
            size="large"
            variant="text"
            sx={{ p: 3 }}
            color="inherit"
            fullWidth={true}
            aria-label="outlined button group"
          >
            <Button href="/auth/registration">РЕГИСТРАЦИЯ</Button>
            <Button href="/auth/login">ВОЙТИ</Button>
          </ButtonGroup>
        </Grid>
        {children}
      </Box>
    </Paper>
  );
}
