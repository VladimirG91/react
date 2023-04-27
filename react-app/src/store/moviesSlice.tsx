import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

import { ICardProps } from 'components/Card';

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async function (searchValue: string | number) {
    const response = await fetch(
      `https://642c494a208dfe25472ca61d.mockapi.io/movies?search=${searchValue}`
    );
    if (!response.ok) {
      throw new Error('Server Error!');
    }
    const data = await response.json();
    return data;
  }
);

export interface MoviesState {
  movies: ICardProps[];
  status: null | string;
  error: null | string;
  isLoading?: boolean;
}

const initialState: MoviesState = {
  movies: [],
  status: null,
  error: null,
  isLoading: true,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovie: (state, action: PayloadAction<ICardProps[]>) => {
      state.movies = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state: MoviesState) => {
      state.status = 'loading';
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(
      fetchMovies.fulfilled,
      (state: MoviesState, action: PayloadAction<ICardProps[]>) => {
        state.status = 'resolved';
        state.movies = action.payload;
        state.isLoading = false;
      }
    );
    builder.addCase(fetchMovies.rejected, (state: MoviesState) => {
      state.status = 'rejected';
      state.isLoading = false;
    });
  },
});

// export const setMovie = moviesSlice.actions;

export default moviesSlice.reducer;
