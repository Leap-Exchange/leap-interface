import { createSlice } from "@reduxjs/toolkit";

const initialState = { selectedToken: { send: {}, liquidity: {} } };

export const tokenInputSlice = createSlice({
  name: "tokenInput",
  initialState,
  reducers: {
    changeSelectedToken(state, action) {
      if (action.payload.page === "send") {
        state.selectedToken.send = action.payload.token;
      } else {
        state.selectedToken.liquidity = action.payload.token;
      }
    },
  },
});

export const tokenInputActions = tokenInputSlice.actions;
