import { configureStore, combineReducers } from '@reduxjs/toolkit';
import messageReducer from './message';

const rootReducer = combineReducers({ message: messageReducer });
const store = configureStore({ reducer: rootReducer });

export default store;
