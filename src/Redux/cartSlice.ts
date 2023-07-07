'use client';

import { createSlice } from '@reduxjs/toolkit';
import { Book } from '@/types';

export type CartBook = Book & {
  quantity: number;
};

export type CartState = {
  cart: CartBook[];
};

const initialState: CartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => { state.cart = [...state.cart, action.payload]; },
    incrementItem: (state, action) => {
      const index = state.cart.findIndex((book) => book.id === action.payload);
      state.cart[index].quantity += 1;
    },
    decrementItem: (state, action) => {
      const index = state.cart.findIndex((book) => book.id === action.payload);
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity -= 1;
      } else {
        state.cart.splice(index, 1);
      }
    },
    emptyCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart, incrementItem, decrementItem, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
