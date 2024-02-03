import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    adverts: [],
    isLoading: false,
  },
  reducers: {
    addToFavorite(state, action) {
      state.adverts.push(action.payload);
    },
    deleteFromFavorites(state, action) {
      state.adverts = state.adverts.filter((el) => el.id !== action.payload.id);
    },
  },
});
export const { addToFavorite, deleteFromFavorites } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
