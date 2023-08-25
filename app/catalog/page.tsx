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
  weight: "400",
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
        }}
      >
        <Container maxWidth="xl">
          <Stack className={montserrat.className}>
            <CustomBreadcrumbs />
            <Typography variant="h2" color="initial">
              Каталог specialized
            </Typography>
            <Box>
              <CardItem />
            </Box>
          </Stack>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
