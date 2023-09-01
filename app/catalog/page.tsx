import Header from "components/header";
import Footer from "components/footer";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CardItem from "components/CardItem";
import CustomBreadcrumbs from "components/breadcrumbs";

import { theme } from "../../theme";
import { ThemeProvider } from "@mui/material/styles";
import { Grid } from "@mui/material";

export default function Catalog() {
  return (
    <>
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
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <CardItem />
                </Grid>
                <Grid item xs={3}>
                  <CardItem />
                </Grid>
                <Grid item xs={3}>
                  <CardItem />
                </Grid>
                <Grid item xs={3}>
                  <CardItem />
                </Grid>
                <Grid item xs={3}>
                  <CardItem />
                </Grid>
              </Grid>
              {/* <Box sx={{ pt: 2, pb: 2 }}>
                <CardItem />
              </Box> */}
            </Stack>
          </Container>
        </Box>
      </ThemeProvider>
      <Footer />
    </>
  );
}
