import { createSlice } from '@reduxjs/toolkit';

const init =
  localStorage.getItem('reminders') !== null &&
  JSON.parse(localStorage.getItem('reminders')).length > 0
    ? JSON.parse(localStorage.getItem('reminders')).map((reminder) => {
        return { ...reminder, date: new Date(reminder.date) };
      })
    : [];

const base = {
  reminders: init,
};

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState: base,
  setReminders() {},
});

export const { setReminders } = calendarSlice.actions;
