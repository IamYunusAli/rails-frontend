import { createAsyncThunk } from '@reduxjs/toolkit';

const FETCH = 'message/FETCH';

const messageReducer = (state = { message: '' }, action) => {
  switch (action.type) {
    case `${FETCH}/fulfilled`:
      return { ...state, message: action.payload };
    default:
      return state;
  }
};

export const fetchMessage = createAsyncThunk(FETCH, async () => {
  const response = await fetch('http://localhost:3000/messages');
  const data = await response.json();
  return data;
});

export default messageReducer;
