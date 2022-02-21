import { configureStore } from "@reduxjs/toolkit";
import { themeSlice } from "./ThemeSlice";

const store = configureStore({
  reducer: { theme: themeSlice.reducer },
});

export default store;
