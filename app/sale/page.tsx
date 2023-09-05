"use client";
import Header from "components/header/header";
import Footer from "components/footer/footer";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CustomBreadcrumbs from "components/breadcrumbs";

import { theme } from "../../theme";
import { ThemeProvider } from "@mui/material/styles";
import { Grid, Button } from "@mui/material";
import { getCatalog } from "./function/getCatalog";
import { useState } from "react";
import { CardsList } from "components/cards/cardsList";
import { getProducts } from "app/products/getProducts";
import { loadProducts } from "app/redux/features/products/productsSlice";
import { Provider, useDispatch } from "react-redux";
import { store } from "app/redux/store";

export default function Catalog() {
  // const dispatch = useDispatch();

  const handleGetCatalog = () => {
    // dispatch(testLoadProducts());
    getProducts();
  };
  return (
    <>
      <Provider store={store}>
        <Header />
        <ThemeProvider theme={theme}>
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
                <CustomBreadcrumbs />
                <Typography
                  variant="h3"
                  color="common.black"
                  sx={{ pt: 2, pb: 4 }}
                >
                  каталог specialized
                </Typography>
                <Button
                  type="button"
                  variant="outlined"
                  color="primary"
                  onClick={handleGetCatalog}
                >
                  getCategory
                </Button>
                <CardsList />
                {/* <Box sx={{ pt: 2, pb: 2 }}>
                <CardItem />
              </Box> */}
              </Stack>
            </Container>
          </Box>
        </ThemeProvider>
        <Footer />
      </Provider>
    </>
  );
}
