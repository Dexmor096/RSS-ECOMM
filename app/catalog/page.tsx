import Header from "components/header";
import Footer from "components/footer";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function Catalog() {
  return (
    <>
      <Header />
      <Box>
        <Container maxWidth="xl">
          <Stack>
            <span>breadcrumbs</span>
            <Typography variant="h2" color="initial">
              Каталог specialized
            </Typography>
            <Box>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="auto"
                    image="./assets/card-img/mountain.png"
                    alt=""
                    sx={{
                      p: 2,
                    }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="body1" component="h5">
                      Mountain
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      132 товара
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          </Stack>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
