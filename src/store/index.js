import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import menuSlice from "./menu-slice";

const store = configureStore({
  reducer: { 
    auth: authSlice.reducer,
    menu: menuSlice.reducer
  },
});

export default store;
