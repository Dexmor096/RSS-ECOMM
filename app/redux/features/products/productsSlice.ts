"use client";
import { IProductState } from "types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAnonymousApiRoot } from "apiRoot";
import { createQueryArgs } from "app/controllers/controller";
import { ByProjectKeyProductProjectionsRequestBuilder } from "@commercetools/platform-sdk/dist/declarations/src/generated/client/product-projections/by-project-key-product-projections-request-builder";
import { CategoryPagedQueryResponse } from "@commercetools/platform-sdk";

const initialState: IProductState = {
  status: "not loaded",
  error: null,
  list: [],
};

export const loadProducts = createAsyncThunk(
  "products/load-products",
  async (categoryId: string) => {
    return (
      getAnonymousApiRoot()
        .productProjections()
        .search()
        //.categories()
        .get({
          queryArgs: {
            ...createQueryArgs(categoryId),
            // filter: 'categories.id: "832585fd-5dd9-4329-afaf-a5fcd7a809c4"',
            published: true,
          },
        })
        .execute()
        .then((data) => {
          console.log("Products received", data.body.results, categoryId);
          return data.body.results;
        })
        .catch((error) => {
          console.error("error");
          throw error;
        })
    );
  },
); // id: "05e3e06a-8a92-48e2-8333-f21e2e9a0900"

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
