import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    selectedMake: null,
    selectedPrice: null,
    selectedPriceLabel: null,
    minValue: "",
    maxValue: "",
  },
  reducers: {
    setMake(state, action) {
      state.selectedMake = action.payload;
    },
    setPrice(state, action) {
      state.selectedPrice = action.payload;
      state.selectedPriceLabel = action.payload ? `${action.payload}` : null;
    },
    setOnMinValue(state, action) {
      state.minValue = action.payload;
    },
    setOnMaxValue(state, action) {
      state.maxValue = action.payload;
    },
  },
});
export const {
  updateFilter,
  setMake,
  setPrice,
  selectedPriceLabel,
  setOnMinValue,
  setOnMaxValue,
} = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
