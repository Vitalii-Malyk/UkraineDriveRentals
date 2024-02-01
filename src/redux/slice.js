import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    toggleFavorite: (state, action) => {
      const carId = action.payload;
      const index = state.indexOf(carId);
      if (index !== -1) {
        state.splice(index, 1);
      } else {
        state.push(carId);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
