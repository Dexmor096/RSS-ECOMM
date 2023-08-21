"use client";
import { usePathname } from "next/navigation";
import { ButtonGroup, Paper } from "@mui/material";
import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Montserrat } from "next/font/google";
import Header from "components/header";
import Footer from "components/footer";

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

const auth = ["РЕГИСТРАЦИЯ", "ВОЙТИ"];
const paths = ["registration", "login"];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <>
      <Header />
      <Paper
        elevation={8}
        sx={{
          width: "40vw",
          margin: "100px auto",
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
              {auth.map((link, index) => (
                <Button
                  href={`/auth/${paths[index]}`}
                  className={montserrat.className}
                  sx={{
                    fontSize: "22px",
                    borderBottom:
                      pathname === `/auth/${paths[index]}`
                        ? "2px solid #8933CC"
                        : "inherit",
                    color:
                      pathname === `/auth/${paths[index]}`
                        ? "#000000"
                        : "inherit",
                  }}
                  key={index}
                >
                  {link}
                </Button>
              ))}
            </ButtonGroup>
          </Grid>
          {children}
        </Box>
      </Paper>
      <Footer />
    </>
  );
}
