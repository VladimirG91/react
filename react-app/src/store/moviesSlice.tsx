import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

import { ICardProps } from 'components/Card';

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async function (searchValue: string | number, { rejectWithValue }) {
    try {
      const response = await fetch(
        `https://642c494a208dfe25472ca61d.mockapi.io/movies?search=${searchValue}`
      );
      if (!response.ok) {
        throw new Error('Server Error!');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error as string);
    }
  }
);

export interface MoviesState {
  movies: ICardProps[];
  status: null | string;
  error: null | string;
}

const initialState: MoviesState = {
  movies: [],
  status: null,
  error: null,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovie: (state, action: PayloadAction<ICardProps[]>) => {
      state.movies = action.payload;
    },
  },
  extraReducers: {
    [fetchMovies.pending.type]: (state: MoviesState) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchMovies.fulfilled.type]: (state: MoviesState, action: PayloadAction<ICardProps[]>) => {
      state.status = 'resolved';
      state.movies = action.payload;
    },
    [fetchMovies.rejected.type]: (state: MoviesState, action: PayloadAction<string>) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
  },
});

export const setMovie = moviesSlice.actions;

export default moviesSlice.reducer;
