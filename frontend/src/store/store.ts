import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../store/user/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
