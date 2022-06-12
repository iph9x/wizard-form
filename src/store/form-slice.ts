import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Colors, Quality, Shapes, Sizes } from 'src/shared/types';

export type TFormState = {
  name: string;
  price: string;
  shape: Shapes | null;
  description: string;
  color: Colors | null;
  quality: Quality | null;
  size: Sizes | null;
};

const initialState: TFormState = {
  name: '',
  price: '',
  shape: null,
  description: '',
  color: null,
  quality: null,
  size: null,
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setStepOne(state, action: PayloadAction<Pick<TFormState, 'name' | 'price'>>) {
      state.name = action.payload.name;
      state.price = action.payload.price;
    },
    setStepTwo(state, action: PayloadAction<Pick<TFormState, 'shape' | 'description' | 'color'>>) {
      state.shape = action.payload.shape;
      state.description = action.payload.description;
      state.color = action.payload.color;
    },
    setStepThree(state, action: PayloadAction<Pick<TFormState, 'quality' | 'size'>>) {
      state.quality = action.payload.quality;
      state.size = action.payload.size;
    },
  },
});

export const { setStepOne, setStepTwo, setStepThree } = formSlice.actions;
export const formReducer = formSlice.reducer;
