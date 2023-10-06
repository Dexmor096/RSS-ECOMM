"use client";
import Header from "components/header/header";
import Footer from "components/footer/footer";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CustomBreadcrumbs from "components/breadcrumbs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Details } from "types";

import { Provider } from "react-redux";
import { store } from "app/redux/store";
import Grid from "@mui/material/Grid";

export default function Details({ params: { id } }: Details) {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Box
          sx={{
            backgroundColor: "#D8D8D8",
            fontFamily: "Montserrat",
            paddingTop: 7,
            paddingBottom: 7,
          }}
        >
          <Container maxWidth="xl">
            <Stack>
              <CustomBreadcrumbs current={id} />
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Box height={5}>
                    <Swiper
                      modules={[Navigation, Pagination, Scrollbar, A11y]}
                      spaceBetween={5}
                      slidesPerView={2}
                      navigation
                      pagination={{ clickable: true }}
                      onSlideChange={() => console.log("slide change")}
                    >
                      <SwiperSlide>slide 1</SwiperSlide>
                      <SwiperSlide>slide 2</SwiperSlide>
                      <SwiperSlide>slide 3</SwiperSlide>
                    </Swiper>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  description
                </Grid>
              </Grid>
              {/* <Typography
                variant="h3"
                color="common.black"
                sx={{ pt: 2, pb: 4 }}
              >
                {id + " details"}
              </Typography> */}
            </Stack>
          </Container>
        </Box>
        <Footer />
      </Provider>
    </>
  );
}
