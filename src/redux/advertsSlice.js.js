import { createSlice } from "@reduxjs/toolkit";
import { getAllAdverts } from "../services/Api";

const advertsSlice = createSlice({
  name: "adverts",
  initialState: {
    brand: "",
    adverts: [],
    isShowModal: false,
    isLoading: false,
    isError: null,
  },
  reducers: {
    setBrand(state, action) {
      state.brand = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllAdverts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllAdverts.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.adverts = state.adverts.concat(payload);
        // state.adverts = [...state.adverts, ...payload];
        state.isLoading = false;
      })
      .addCase(getAllAdverts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});
export const { setBrand } = advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;
