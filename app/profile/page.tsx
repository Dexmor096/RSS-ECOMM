"use client";
import Header from "../../components/header";
import * as React from "react";
import Footer from "../../components/footer";
import { getMyInfo } from "../controllers/controller";
import { Container, Typography } from "@mui/material";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

export default function Profile() {
  getMyInfo();
  return (
    <>
      <Header />
      <Container
        disableGutters={true}
        sx={{
          maxWidth: "1220px",
          height: "auto",
          alignItems: "center",
          justifyContent: "start",
          p: "40px 0",
        }}
      >
        <Typography
          variant="h1"
          className={montserrat.className}
          textTransform="uppercase"
          fontSize={32}
          letterSpacing={4}
        >
          Личный кабинет
        </Typography>
      </Container>
      <Footer />
    </>
  );
}
