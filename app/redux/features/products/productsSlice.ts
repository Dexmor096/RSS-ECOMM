"use client";
import { IProductState } from "types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAnonymousApiRoot } from "apiRoot";

const initialState: IProductState = {
  status: "not loaded",
  error: null,
  list: [],
};

export const loadProducts = createAsyncThunk(
  "products/load-products",
  async () => {
    return (
      getAnonymousApiRoot()
        .productProjections()
        // .search()
        .get({
          queryArgs: { limit: 8, published: true },
        })
        .execute()
        .then((data) => {
          console.log("Products received", data.body.results);
          return data.body.results;
        })
        .catch((error) => {
          console.error("error");
          throw error;
        })
    );
  },
);

export const productSlice = createSlice({
  name: "@@products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadProducts.pending, (state) => {
        state.status = "loading products";
        state.error = null;
      })
      .addCase(loadProducts.rejected, (state, action) => {
        state.status = "rejected";
        state.error = "action.payload.error" || action.payload;
      })
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.status = "products received";
        state.list = action.payload;
      });
  },
});

export const productReducer = productSlice.reducer;
