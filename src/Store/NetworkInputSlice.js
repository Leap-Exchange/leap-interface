import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedSourceNetwork: {},
  selectedDestinationNetwork: {},
  sourceNetworkIsSelected: false,
  destinationNetworkIsSelected: false,
};

export const networkInputSlice = createSlice({
  name: "networkInput",
  initialState,
  reducers: {
    changeSelectedNetwork(state, action) {
      if (action.payload.id === "Source") {
        state.selectedSourceNetwork = action.payload.network;
        state.sourceNetworkIsSelected = true;
      } else {
        state.selectedDestinationNetwork = action.payload.network;
        state.destinationNetworkIsSelected = true;
      }
    },
  },
});

export const networkInputActions = networkInputSlice.actions;
