import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  quantity: 0,
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action) {
      state.quantity++;
      state.products.push(action.payload);
      state.totalAmount += action.payload.price * action.payload.quantity;
    },
    removeProduct(state, action) {
      const product = state.products.find(
        (product) => product._id === action.payload
      );

      state.products = state.products.filter(
        (product) => product._id !== action.payload
      );
      state.quantity--;
      state.totalAmount -= product.quantity*product.price;
    },
  },
});

export const cartActions = cartSlice.actions;
