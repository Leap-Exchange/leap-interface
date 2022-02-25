import { configureStore } from "@reduxjs/toolkit";
import { networkInputSlice } from "./NetworkInputSlice";
import { themeSlice } from "./ThemeSlice";
import { tokenInputSlice } from "./TokenInputSlice";

const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    tokenInput: tokenInputSlice.reducer,
    networkInput: networkInputSlice.reducer,
  },
});

export default store;
