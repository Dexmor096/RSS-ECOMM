import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { ProductProjection } from "@commercetools/platform-sdk";

export default function CardItem(props: ProductProjection) {
  const { name, masterVariant } = props;
  return (
    <Card sx={{ maxWidth: 345, maxHeight: 530 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="auto"
          image={masterVariant?.images?.[0]["url"]}
          alt=""
          sx={{
            p: 2,
            objectFit: "cover",
            height: 330,
          }}
        />
        <CardContent sx={{ p: "50px 22px" }}>
          <Typography gutterBottom variant="h6" component="h3">
            {name["en-US"]}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            132 товара
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
