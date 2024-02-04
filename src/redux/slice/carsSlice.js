import { createSlice } from "@reduxjs/toolkit";

import { getCarsThunk, getAllCarsThunk } from "../../services/Api";
import {
  handleGetAllCarsThunkFulfilled,
  handleGetCarsThunkFulfilled,
} from "./helpers.js";

const initialState = {
  cars: [],
  allCars: [],
  carsBrands: [],
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllCarsThunk.fulfilled, handleGetAllCarsThunkFulfilled)
      .addCase(getCarsThunk.fulfilled, handleGetCarsThunkFulfilled);
  },
});

export const carsReducer = carsSlice.reducer;
