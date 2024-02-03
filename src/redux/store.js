import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import { favoriteReducer } from "./favoriteSlice.js";
import { advertsReducer } from "./advertsSlice.js";
import { filterReducer } from "./filterSlice.js";

const favoritePersistConfig = {
  key: "favorite",
  storage,
  whitelist: ["favorites"],
};

export const store = configureStore({
  reducer: {
    favorites: persistReducer(favoritePersistConfig, favoriteReducer),
    adverts: advertsReducer,
    filter: filterReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
