import CardItem from "./cardItem";
import { Grid } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadProducts } from "app/redux/features/products/productsSlice";
import { AsyncThunkAction } from "@reduxjs/toolkit";

export const CardsList = () => {
  // useEffect(() => {
  //   dispatch(loadProducts());
  // }, [dispatch]);
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <CardItem />
      </Grid>
    </Grid>
  );
};
