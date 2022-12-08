
import { configureStore } from '@reduxjs/toolkit';
import adminAuthReducer from '../features/adminAuth/adminSlice';

export const store = configureStore({
  reducer: {
    adminAuth: adminAuthReducer,
  },
})

