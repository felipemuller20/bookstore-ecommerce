'use client';

import { createSlice } from '@reduxjs/toolkit';
import { Book } from '@/types';

export type CartState = {
  cart: Book[];
};

const initialState: CartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => { state.cart = [...state.cart, action.payload]; },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
