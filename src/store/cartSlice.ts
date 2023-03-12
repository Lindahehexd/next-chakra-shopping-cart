// In your Redux store setup, define a slice for managing the cart state:
import { createSlice } from "@reduxjs/toolkit";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imgSrc: any;
}

interface CartState {
  items: CartItem[];
  totalQuantity: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
      state.totalQuantity++;
    },
    remove: (state, action) => {
      const idToRemove = action.payload;
      const itemToRemove = state.items.find((item) => item.id === idToRemove);
      if (itemToRemove) {
        state.items = state.items.filter((item) => item.id !== idToRemove);
        state.totalQuantity -= itemToRemove.quantity;
      }
    },

    increase: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity++;
        state.totalQuantity++;
      }
    },

    decrease: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity--;
        state.totalQuantity--;
      }
    },

    deleteAll: (state) => {
      state.items = [];
      state.totalQuantity = 0;
    },
  },
});

export const { addItem, remove, increase, decrease, deleteAll } = cartSlice.actions;
export default cartSlice.reducer;
