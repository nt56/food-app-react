import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //mutating the state
      state.items.push(action.payload); //adding item in cart
    },
    removeItem: (state) => {
      state.items.pop(); //removing first item in cart
    },
    clearCart: (state) => {
      state.items.length = 0; //making len of arr 0 to clear cart
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions; //exporting all actions

export default cartSlice.reducer; //exporting the reducers
