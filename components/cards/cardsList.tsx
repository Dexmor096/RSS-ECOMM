import CardItem from "./cardItem";
import { Grid } from "@mui/material";

import { useAppSelector } from "app/redux/hooks/customHooks";

export const CardsList = () => {
  const products = useAppSelector((state) => state.product.list);

  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid key={product.key} item xs={3}>
          <CardItem {...product} key={product.key} />
        </Grid>
      ))}
    </Grid>
  );
};
