import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/authSlices';

export const store = configureStore({
   reducer:{
      auth: authSlice.reducer,
   },
});