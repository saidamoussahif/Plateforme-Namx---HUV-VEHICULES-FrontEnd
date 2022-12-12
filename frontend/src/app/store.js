
<<<<<<< HEAD
import { configureStore } from '@reduxjs/toolkit';
import adminAuthReducer from '../features/adminAuth/adminSlice';

export const store = configureStore({
  reducer: {
    adminAuth: adminAuthReducer,
  },
})

=======
import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import typesReducer from '../features/types/typesSlice'
export const store = configureStore({
  reducer: {
    auth : authReducer,
    types : typesReducer,
  },
})
export default store
>>>>>>> b3573fb0d3a3a5f2bd1676faf95eee6936c1d344
