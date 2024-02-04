import { makeUniqueBrandsState } from "../../helpers/functions/functions";

export const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const handleFulfilled = (state) => {
  state.isLoading = false;
  state.error = null;
};

export const handleGetAllCarsThunkFulfilled = (state, { payload }) => {
  state.allCars = payload;
  state.carsBrands = makeUniqueBrandsState(payload);
};

export const handleGetCarsThunkFulfilled = (state, { payload }) => {
  state.cars = [...state.cars, ...payload];
};
