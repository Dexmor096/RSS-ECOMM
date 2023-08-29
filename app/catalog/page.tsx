import Header from "components/header";
import Footer from "components/footer";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CardItem from "components/CardItem";
import CustomBreadcrumbs from "components/breadcrumbs";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

export default function Catalog() {
  return (
    <>
      <Header />
      <Box
        sx={{
          backgroundColor: "#D8D8D8",
          color: "fff",
          paddingTop: 7,
          paddingBottom: 7,
        }}
      >
        <Container maxWidth="xl">
          <Stack className={montserrat.className}>
            <CustomBreadcrumbs />
            <Typography
              className={montserrat.className}
              variant="h3"
              color="primary"
              sx={{ p: "35px 0" }}
            >
              каталог specialized
            </Typography>
            <Box sx={{ p: "35px 0" }}>
              <CardItem />
            </Box>
          </Stack>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
