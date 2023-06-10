import { createSlice } from '@reduxjs/toolkit';

const base = {
  tasks: [],
};

export const todoSlice = createSlice({
  name: 'todoSlice',
  initialState: base,
  reducers: {
    addTask(state, action) {
      state.tasks.push(action);
    },
    removeTask(state, payload) {
      state.tasks = payload;
    },
  },
});

export const { addTask } = todoSlice.actions;
