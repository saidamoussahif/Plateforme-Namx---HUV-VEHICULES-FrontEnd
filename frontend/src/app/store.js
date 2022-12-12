
import { configureStore } from '@reduxjs/toolkit';
import adminAuthReducer from '../features/adminAuth/adminSlice';
import authReducer from '../features/auth/authSlice'
import typesReducer from '../features/types/typesSlice'

export const store = configureStore({
  reducer: {
    adminAuth: adminAuthReducer,
    auth : authReducer,
    types : typesReducer,
  },
})


export default store
