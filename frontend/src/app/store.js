
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