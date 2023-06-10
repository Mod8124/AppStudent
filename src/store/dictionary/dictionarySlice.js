import { createSlice } from '@reduxjs/toolkit';

const base = {
  isLoading: false,
  result: [],
};

export const dictionarySlice = createSlice({
  name: 'dictionary',
  initialState: base,
  reducers: {
    setIsLoading(state) {
      state.isLoading = !state.isLoading;
    },
    setResults(state, { payload }) {
      state.result = payload;
    },
  },
});

export const { setIsLoading, setResults } = dictionarySlice.actions;
