import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: [],
};

export const { reducer, actions } = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.basket = [...state.basket, action.payload];
    },
  },
});
