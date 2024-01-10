import { createSlice } from "@reduxjs/toolkit";

type item = {
  id: string;
  count: number;
};

type Cart = {
  list: item[];
  totalSelectionNumber: number;
  totalSelectionPrice: number;
}

const initialState: Cart = {
  list: [],
  totalSelectionNumber: 0,
  totalSelectionPrice: 0
}

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      if (state.list.map(item => item.id).includes(action.payload.id)) {
        state.list = state.list.map(item => item.id === action.payload.id ? {id: action.payload.id, count: action.payload.count} : item)
      } else {
        state.list.push(action.payload);
      }

      state.totalSelectionNumber++;
      state.totalSelectionPrice = state.totalSelectionPrice + action.payload.price;
    },
    removeCart: (state, action) => {
      if (action.payload.count) {
          state.list = state.list.map(item => item.id === action.payload.id ? {id: action.payload.id, count: action.payload.count} : item)
      } else {
        state.list = state.list.filter((item) => item.id !== action.payload.id);
      }

      state.totalSelectionNumber--;
      state.totalSelectionPrice = state.totalSelectionPrice - action.payload.price;
    },
  },
});

export const { addCart, removeCart } = cart.actions;
export default cart.reducer;