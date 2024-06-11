import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../constants/cartItems';

const initialState = {
  items: cartItems,
  totalItems: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    incrementAmount: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.amount += 1;
      }
      cartSlice.caseReducers.calculateTotals(state);
    },
    decrementAmount: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        if (item.amount > 1) {
          item.amount -= 1;
        } else {
          state.items = state.items.filter(item => item.id !== action.payload);
        }
      }
      cartSlice.caseReducers.calculateTotals(state);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      cartSlice.caseReducers.calculateTotals(state);
    },
    clearCart: (state) => {
      state.items = [];
      cartSlice.caseReducers.calculateTotals(state);
    },
    calculateTotals: (state) => {
      let totalItems = 0;
      let totalPrice = 0;
      state.items.forEach(item => {
        totalItems += item.amount;
        totalPrice += item.price * item.amount;
      });
      state.totalItems = totalItems;
      state.totalPrice = totalPrice;
    },
  },
});

export const { incrementAmount, decrementAmount, removeItem, clearCart, calculateTotals } = cartSlice.actions;

export default cartSlice.reducer;
