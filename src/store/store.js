import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/authSlice';
import searchSlice from './search/searchSlice';
import articleSlice from './articles/articleSlice';
import { uiSlice } from './ui/uiSlice';
import courseSlice from './courses/courseSlice';
import { dictionarySlice } from './dictionary/dictionarySlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    search: searchSlice.reducer,
    articles: articleSlice.reducer,
    ui: uiSlice.reducer,
    courses: courseSlice.reducer,
    dictionary: dictionarySlice.reducer,
  },
});
