import { createSlice } from '@reduxjs/toolkit';

const tasksHistory =
  localStorage.getItem('tasksHistory') !== null
    ? JSON.parse(localStorage.getItem('tasksHistory'))
    : [];

const base = {
  tasks: tasksHistory,
};

export const todoSlice = createSlice({
  name: 'todoSlice',
  initialState: base,
  reducers: {
    setTask(state, { payload }) {
      state.tasks.push(payload);

      // save on the local storage
      localStorage.setItem('tasksHistory', JSON.stringify(state.tasks));
    },
    setCompleted(state, { payload }) {
      const index = payload;
      state.tasks[index].completed = !state.tasks[index].completed;
      localStorage.setItem('tasksHistory', JSON.stringify(state.tasks));
    },
    removeTask(state, { payload }) {
      const index = payload;
      state.tasks.splice(index, 1);

      localStorage.setItem('searchHistory', JSON.stringify(state.searchHistory));
    },
  },
});

export const { setTask, removeTask, setCompleted } = todoSlice.actions;
