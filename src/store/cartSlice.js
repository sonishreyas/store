// src/store/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // each item: { id, title, price, image, quantity }
    totalCount: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.items.find((item) => item.id === product.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }

      state.totalCount += 1;
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const existing = state.items.find((item) => item.id === id);
      if (!existing) return;

      state.totalCount -= 1;

      if (existing.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existing.quantity -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const selectCartCount = (state) => state.cart.totalCount;
export const selectIsInCart = (id) => (state) =>
  state.cart.items.some((item) => item.id === id);

export default cartSlice.reducer;
