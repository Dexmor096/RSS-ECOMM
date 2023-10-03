"use client";
import Header from "components/header/header";
import Footer from "components/footer/footer";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CustomBreadcrumbs from "components/breadcrumbs";

import { Details } from "types";

import { Provider } from "react-redux";
import { store } from "app/redux/store";

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
              <Typography
                variant="h3"
                color="common.black"
                sx={{ pt: 2, pb: 4 }}
              >
                {id + " details"}
              </Typography>
            </Stack>
          </Container>
        </Box>
        <Footer />
      </Provider>
    </>
  );
}
