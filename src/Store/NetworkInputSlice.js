import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedNetworks: {
    send: { source: {}, destination: {} },
    liquidity: {},
  },
};

export const networkInputSlice = createSlice({
  name: "networkInput",
  initialState,
  reducers: {
    changeSourceNetwork(state, action) {
      state.selectedNetworks.send.source = action.payload.network;
    },
    changeDestinationNetwork(state, action) {
      state.selectedNetworks.send.destination = action.payload.network;
    },
    changeLiquidityNetwork(state, action) {
      state.selectedNetworks.liquidity = action.payload.network;
    },
  },
});

export const networkInputActions = networkInputSlice.actions;
