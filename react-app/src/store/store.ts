import { configureStore } from '@reduxjs/toolkit';
import moviesSlice from './moviesSlice';
import searchBarSlice from './searchBarSlice';
import cardFormSlice from './cardFormSlice';
import popupSlice from './popupSlice';

export const store = configureStore({
  reducer: {
    search: searchBarSlice,
    movies: moviesSlice,
    popup: popupSlice,
    form: cardFormSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
