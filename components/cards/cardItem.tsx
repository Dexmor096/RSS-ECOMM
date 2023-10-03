import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";

import { CardActionArea, Box } from "@mui/material";
import { ProductProjection } from "@commercetools/platform-sdk";
import Link from "next/link";
import { useAppSelector } from "app/redux/hooks/customHooks";

export default function CardItem(props: ProductProjection) {
  const categoryName = useAppSelector((state) => state.category);

  const { name, masterVariant, slug } = props;
  const filteredPrice = masterVariant.prices?.filter(
    (obj) => obj.country === "US",
  );
  return (
    <Card sx={{ maxWidth: 345, maxHeight: 530 }}>
      <CardActionArea
        component={Link}
        href={`${categoryName}/${slug["en-US"]}`}
      >
        <CardMedia
          component="img"
          height="auto"
          image={masterVariant?.images?.[0]?.url}
          alt=""
          sx={{
            p: 2,
            objectFit: "cover",
            height: 330,
          }}
        />
        <CardContent sx={{ p: "50px 22px" }}>
          <Typography
            gutterBottom
            variant="h6"
            component="h3"
            color=""
            style={{ fontWeight: "bold" }}
          >
            {name["en-US"]}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {filteredPrice?.[0]?.value?.centAmount.toLocaleString()}{" "}
            {filteredPrice?.[0]?.value?.currencyCode}
          </Typography>
          <Box
            sx={{
              mt: 2,
            }}
          >
            <FavoriteBorderIcon sx={{ mr: 1 }} />
            <ShoppingCartOutlined />
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
