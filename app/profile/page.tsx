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
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import { InfoCard } from "../../components/infoCard";
import favoritesIcon from "../../public/assets/icons/favorites.svg";
import ordersIcon from "../../public/assets/icons/orders.svg";

const montserrat = Montserrat({
  weight: "900",
  subsets: ["latin"],
});

const Item = styled(Paper)(() => ({
  textAlign: "start",
  height: "166px",
  lineHeight: "30px",
  padding: 30,
  boxSizing: "content-box",
  fontWeight: "bold",
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
          fontWeight="bold"
          marginBottom="55px"
        >
          Личный кабинет
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Item
              elevation={0}
              sx={{
                display: "flex",
                alignItems: "start",
                gap: "7px",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <AccountCircleOutlinedIcon
                  aria-label="avatar"
                  color="primary"
                  sx={{
                    width: 62,
                    height: 62,
                    verticalAlign: "middle",
                    display: "inline-block",
                  }}
                ></AccountCircleOutlinedIcon>
                <Typography
                  sx={{ fontWeight: "bold", fontSize: 14, paddingLeft: "5px" }}
                >
                  {myInfo?.firstname} {myInfo?.lastname}
                </Typography>
              </div>
              <Typography>
                <span style={{ color: "#969696" }}>E-mail: </span>
                {myInfo?.email}
              </Typography>
              <div style={{ alignSelf: "end" }}>
                <Button>
                  <EditIcon></EditIcon>
                </Button>
                <Button
                  size="medium"
                  variant="text"
                  sx={{
                    textTransform: "capitalize",
                    textDecoration: "underline",
                  }}
                >
                  Выйти
                </Button>
              </div>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item elevation={0}>
              <InfoCard
                title="Мои желания"
                icon={favoritesIcon}
                info={
                  <div>
                    <div>
                      <span style={{ color: "#969696", fontWeight: "normal" }}>
                        Количество товаров{" "}
                      </span>
                      <span>5</span>
                    </div>
                    <div>
                      <span style={{ color: "#969696", fontWeight: "normal" }}>
                        Доступно к заказу{" "}
                      </span>
                      <span>3</span>
                    </div>
                  </div>
                }
              ></InfoCard>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item elevation={0}>
              <InfoCard
                title="Заказы"
                icon={ordersIcon}
                info={<div>2</div>}
              ></InfoCard>
            </Item>
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
