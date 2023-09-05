import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./features/products/productsSlice";
import { themeReducer } from "./features/theme/themeSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {},
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// const rootReducer = combineReducers({
//   productReducer: productReducer,
// });
// export const setupStore = () =>
//   return configureStore({
//     reducer: rootReducer,
//   });
// };

// export type RootState = ReturnType<typeof rootReducer>;
// export type AppStore = ReturnType<typeof setupStore>;
// export type AppDispatch = AppStore["dispatch"];
