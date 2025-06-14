import { createSlice } from "@reduxjs/toolkit";
import products from "../../assets/products.json";

const data = products.products;
export const productSlice = createSlice({
  name: "product",
  initialState: {
    items: data,
    currentMoney: 3100000000,
    initialMoney: 3100000000,
  },
  reducers: {
    updateCount: (state, action) => {
      const { id, count } = action.payload;
      const item = state.items.find((item) => item.id === id);
      item.count = count;

      let price = 0;

      state.items.forEach((item) => {
        price += Number(item.count) * Number(item.productPrice);
      });

      state.currentMoney = Number(state.initialMoney) - Number(price);
    },
  },
});

export const { updateCount } = productSlice.actions;
export default productSlice.reducer;
