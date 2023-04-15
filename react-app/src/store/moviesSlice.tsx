import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICardProps } from 'components/Card';

interface MoviesState {
  movies: ICardProps[];
}
const initialState: MoviesState = {
  movies: [],
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<ICardProps[]>) => {
      state.movies = action.payload;
    },
  },
});
export const { setMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
