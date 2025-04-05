import { configureStore } from '@reduxjs/toolkit';
import { api } from './state/api'; // Adjust the path if needed

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});