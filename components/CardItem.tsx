import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function CardItem() {
  return (
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
        <CardContent sx={{ p: "50px 22px" }}>
          <Typography gutterBottom variant="subtitle2" component="h5">
            Mountain
          </Typography>
          <Typography variant="body2" color="text.secondary">
            132 товара
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
