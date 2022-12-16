
import adminAuthReducer from '../features/adminAuth/adminSlice';
import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import DetailsReducer from "../features/details/DetailSlice"





export const store = configureStore({
  reducer: {
    adminAuth: adminAuthReducer,
    auth : authReducer,
    Details : DetailsReducer,
  },
})


export default store
