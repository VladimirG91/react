import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const searchBarSlice = createSlice({
  name: 'searchBar',
  initialState: {
    value: '',
  },
  reducers: {
    setValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});
export const { setValue } = searchBarSlice.actions;

export default searchBarSlice.reducer;
