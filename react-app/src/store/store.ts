import { configureStore } from '@reduxjs/toolkit';
import moviesSlice from './moviesSlice';
import searchBarSlice from './searchBarSlice';
import cardFormSlice from './cardFormSlice';

export const store = configureStore({
  reducer: {
    search: searchBarSlice,
    movies: moviesSlice,
    form: cardFormSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
