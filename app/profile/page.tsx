"use client";
import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer/footer";
import { InfoCard } from "../../components/infoCard";
import { getMyInfo } from "../controllers/controller";
import { IUserInfo } from "../../types";
import { Container, Paper, Typography, Grid, Button, Box } from "@mui/material";
import { Montserrat } from "next/font/google";
import { styled } from "@mui/system";
import EditIcon from "@mui/icons-material/Edit";
import favoritesIcon from "../../public/assets/icons/favorites.svg";
import ordersIcon from "../../public/assets/icons/orders.svg";
import avatarIcon from "../../public/assets/icons/avatar.svg";

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
  // todo to add margins left, right
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
              <InfoCard
                title={`${myInfo?.firstname} ${myInfo?.lastname}`}
                icon={avatarIcon}
                info={
                  <>
                    <Typography variant="body2">
                      E-mail: {myInfo?.email}
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
              ></InfoCard>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item elevation={0}>
              <InfoCard
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
              ></InfoCard>
            </Item>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
