import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    itemList: [],
    totalQuantity: 0,
    showMenu: false,
  },
  reducers: {
    addToMenu(state, action) {
    
      const newItem = action.payload;
      const existingItem = state.itemList.find(
        (item) => item.id === newItem.id
      );
    
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.itemList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        });
        state.totalQuantity++;
      }
    },
    removeMenu(state, action) {
      const id = action.payload;
      const existingItem = state.itemList.find((item) => item.id === id);

      if (existingItem.quantity === 1) {
        state.itemList = state.itemList.filter((item) => item.id !== id);
        state.totalQuantity--
      }else{
        existingItem.quantity--;
        existingItem.totalPrice-= existingItem.price
      }
    },
    showMenu(state) {
      state.showMenu = !state.showMenu;
    },
  },
});

export const menuActions = menuSlice.actions;
export default menuSlice;
