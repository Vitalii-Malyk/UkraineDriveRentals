export const selectAdverts = (state) => state.adverts.adverts;
export const selectBrand = (state) => state.adverts.brand;
export const selectIsLoading = (state) => state.adverts.isLoading;
export const selectFavorites = (state) => state.favorites.adverts;
export const selectPage = (state) => state.adverts.page;
export const selectFilter = (state) => state.filter;
export const selectTotalFavorites = (state) => state.favorites.adverts.length;
