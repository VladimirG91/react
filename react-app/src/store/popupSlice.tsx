import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

import { ICardProps } from 'components/Card';
import { MoviesState } from './moviesSlice';

export const fetchPopupMovie = createAsyncThunk(
  'movies/fetchPopupMovie',
  async function (id: string) {
    const response = await fetch(`https://642c494a208dfe25472ca61d.mockapi.io/movies/${id}`);
    if (!response.ok) {
      throw new Error('Server Error!');
    }
    const data = await response.json();
    return data;
  }
);

const initialState: MoviesState = {
  movies: [],
  status: null,
  error: null,
};

const popupSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovie: (state, action: PayloadAction<ICardProps[]>) => {
      state.movies = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPopupMovie.pending, (state: MoviesState) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(
      fetchPopupMovie.fulfilled,
      (state: MoviesState, action: PayloadAction<ICardProps[]>) => {
        state.status = 'resolved';
        state.movies = action.payload;
      }
    );
    builder.addCase(fetchPopupMovie.rejected, (state: MoviesState) => {
      state.status = 'rejected';
    });
  },
});

export const setMovie = popupSlice.actions;

export default popupSlice.reducer;
