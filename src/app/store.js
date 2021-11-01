import { configureStore, createStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import reducer from '../features/userSlice'


export let store = configureStore({
  reducer: {
    user: userReducer,
  },
});


