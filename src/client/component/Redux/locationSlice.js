// locationSlice.js
import { createSlice } from '@reduxjs/toolkit';

const locationSlice = createSlice({
  name: 'location',
  initialState: {
    additionalInput: '',
    adss: '',
    tokenAuth:''
  },
  reducers: {
    setAdditionalInput: (state, action) => {
      state.additionalInput = action.payload;
    },
    setAdss: (state, action) => {
      state.adss = action.payload;
    },
    setTokenAuth: (state, action) => {
      state.tokenAuth = action.payload;
    },
  },
});

export const { setAdditionalInput, setAdss,setTokenAuth } = locationSlice.actions;
export default locationSlice.reducer;
