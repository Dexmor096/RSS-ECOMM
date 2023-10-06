"use client";
import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer/footer";
import { BigCard } from "../../components/profileCards/bigCard";
import { SmallCard } from "../../components/profileCards/smallCard";
import { getMyInfo } from "../controllers/controller";
import { IUserInfo } from "../../types";
import { Container, Typography, Grid, Button, Box } from "@mui/material";
import { Montserrat } from "next/font/google";
import EditIcon from "@mui/icons-material/Edit";
import favoritesIcon from "../../public/assets/icons/favorites.svg";
import ordersIcon from "../../public/assets/icons/orders.svg";
import avatarIcon from "../../public/assets/icons/avatar.svg";
import homeIcon from "../../public/assets/icons/home.svg";
import saleIcon from "../../public/assets/icons/sale.svg";
import moneyIcon from "../../public/assets/icons/money.svg";
import feedBackIcon from "../../public/assets/icons/feedback.svg";

const montserrat = Montserrat({
  weight: "900",
  subsets: ["latin"],
});

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
        maxWidth="lg"
        disableGutters={true}
        sx={{
          height: "auto",
          alignItems: "center",
          justifyContent: "start",
          p: "40px 0",
          margin: "auto",
          padding: "35px 15px 15px 15px",
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
          <Grid item xs={12} md={4}>
            <BigCard
              title={`${myInfo?.firstname} ${myInfo?.lastname}`}
              icon={avatarIcon}
              info={
                <>
                  <Typography variant="body2">
                    E-mail: {myInfo?.email}
                  </Typography>
                  <Typography variant="body2">
                    Birth: {myInfo?.birthDay ? myInfo?.birthDay : "XX.XX.XXXX"}
                  </Typography>
                  <Box display="flex" justifyContent="end">
                    <Button>
                      <EditIcon></EditIcon>
                    </Button>
                    <Button
                      size="medium"
                      variant="text"
                      sx={{
                        alignSelf: "end",
                        textTransform: "capitalize",
                        textDecoration: "underline",
                      }}
                    >
                      Выйти
                    </Button>
                  </Box>
                </>
              }
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <BigCard
              title="Мои желания"
              icon={favoritesIcon}
              info={
                <div>
                  <div>
                    <Typography
                      style={{ color: "#969696" }}
                      variant="body2"
                      display="inline"
                      gutterBottom
                    >
                      Количество товаров
                    </Typography>
                    <Typography variant="body2" display="inline">
                      {" 4 "}
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      style={{ color: "#969696" }}
                      variant="body2"
                      display="inline"
                      gutterBottom
                    >
                      Доступно к заказу
                    </Typography>
                    <Typography variant="body2" display="inline">
                      {" 5 "}
                    </Typography>
                  </div>
                </div>
              }
            ></BigCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <BigCard
              title="Заказы"
              icon={ordersIcon}
              info={
                <Typography
                  style={{ color: "#969696" }}
                  variant="body2"
                  display="inline"
                  gutterBottom
                >
                  У вас пока нет заказов
                </Typography>
              }
            ></BigCard>
          </Grid>
          <Grid item xs={6} md={3}>
            <SmallCard title="Мои адреса" icon={homeIcon}></SmallCard>
          </Grid>
          <Grid item xs={6} md={3}>
            <SmallCard title="Скидка покупателя" icon={saleIcon}></SmallCard>
          </Grid>
          <Grid item xs={6} md={3}>
            <SmallCard
              title="Финансы и электронные чеки"
              icon={moneyIcon}
            ></SmallCard>
          </Grid>
          <Grid item xs={6} md={3}>
            <SmallCard title="Обратная связь" icon={feedBackIcon}></SmallCard>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
