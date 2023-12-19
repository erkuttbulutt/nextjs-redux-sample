import { reducer as userReducer } from "./user-store";
import { reducer as productsReducer } from "./products-store";
import { reducer as basketReducer } from "./basket-store";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer,
    basket: basketReducer,
  },
});
