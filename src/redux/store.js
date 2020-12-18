import habbitReduser from './habbits/HabbitRedusers';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    user: habbitReduser,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
