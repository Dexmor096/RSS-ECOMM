"use client";
import Header from "../../components/header";
import * as React from "react";
import Footer from "../../components/footer";
import { getMyInfo } from "../controllers/controller";
import { Container, Paper, Typography } from "@mui/material";
import { Montserrat } from "next/font/google";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";
import { IUserInfo } from "../../types";

const montserrat = Montserrat({
  weight: "900",
  subsets: ["latin"],
});

const Item = styled(Paper)(({ theme }) => ({
  textAlign: "start",
  height: 60,
  lineHeight: "60px",
}));

export default function Profile() {
  const [myInfo, setMyInfo] = useState<IUserInfo | null>(null);
  useEffect(() => {
    getMyInfo().then((data) => {
      if (data) {
        const info: IUserInfo = {
          firstname: data.body.firstName!,
          lastname: data.body.lastName!,
          birthDay: data.body.dateOfBirth!,
          addresses: [""],
          email: data.body.email,
        };
        setMyInfo(info);
      }
    });
  }, []);

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
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Item elevation={0}>{myInfo?.firstname}</Item>
          </Grid>
          <Grid item xs={4}>
            <Item elevation={0}>Item</Item>
          </Grid>
          <Grid item xs={4}>
            <Item elevation={0}>Item</Item>
          </Grid>
          <Grid item xs={8}>
            3{" "}
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
