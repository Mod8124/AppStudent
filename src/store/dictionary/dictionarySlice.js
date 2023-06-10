import { createSlice } from '@reduxjs/toolkit';

const base = {
  isLoading: false,
  result: [],
  homeResults: [],
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
    setHomeResults(state, { payload }) {
      state.homeResults = [];
      // push new places when this not exists in the storage
      payload.forEach((result) => {
        if (!state.homeResults.includes(result.word)) {
          state.homeResults.push(result);
        }
      });
    },
  },
});

export const { setIsLoading, setResults, setHomeResults } = dictionarySlice.actions;
