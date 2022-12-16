import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import DetailService from './DetailService'


const initialState = {
    Details: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
  }

  // Get types
export const getDetails = createAsyncThunk(
    'Details/getDetails',
    async (_, thunkAPI) => {
      try {
       
        const token = thunkAPI.getState().auth.user.token
        return await DetailService.getDetails(token)
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        return thunkAPI.rejectWithValue(message)
      }
    }
  )
  export const DetailSlice = createSlice({
    name: 'Details',
    initialState,
    reducers: {
      reset: (state) => initialState,
    },
    extraReducers: (builder) => {
      builder
      .addCase(getDetails.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getDetails.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.Details = action.payload
      })
      .addCase(getDetails.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

    }
    })

  export const { reset } = DetailSlice.actions
export default DetailSlice.reducer