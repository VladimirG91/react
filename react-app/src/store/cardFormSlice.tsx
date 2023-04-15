import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ICardData {
  title: string;
  description: string;
  releaseDate: string;
  genre: string;
  notRobot?: boolean;
  viewed?: boolean;
  imageUrl?: string;
  image?: FileList;
}

interface ICardFormState {
  cardData: ICardData[];
}

const initialState: ICardFormState = {
  cardData: [],
};

export const cardFormSlice = createSlice({
  name: 'cardForm',
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<ICardData>) => {
      state.cardData.push(action.payload);
    },
  },
});

export const { setFormData } = cardFormSlice.actions;

export default cardFormSlice.reducer;
