import { createSlice } from "@reduxjs/toolkit";

const initialState = { selectedToken: undefined };

export const tokenInputSlice = createSlice({
  name: "tokenInput",
  initialState,
  reducers: {
    changeSelectedToken(state, action) {
      state.selectedToken = action.payload;
    },
    returnUID(state, action) {
      return `${action.payload.address}_${action.payload.chainID}`;
    },
  },
});

export const tokenInputActions = tokenInputSlice.actions;
