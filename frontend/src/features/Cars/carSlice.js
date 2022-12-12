import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import carService from "./carService";

const initialState = {
  cars: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// export const getCars = createAsyncThunk("cars/getCars", async () => {

//   return fetch("http://localhost:8000/api/cars/").then((res) =>
//     res.json()
//   );
// });

export const getCars = createAsyncThunk("cars/getCars", async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.admin.token;
    return await carService.getCars(token);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCars.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.cars = action.payload;
      })
      .addCase(getCars.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = carSlice.actions;
export default carSlice.reducer;

// const initialState = {
//   cars: [],
//   isError: false,
//   isSuccess: false,
//   isLoading: false,
//   message: "",
// };

// export const getCars = createAsyncThunk("cars/getCars", async (_, thunkAPI) => {
//   try {
//     const token = thunkAPI.getState().auth.admin.token;
//     return await carService.getCars(token);
//   } catch (error) {
//     const message =
//       (error.response && error.response.data && error.response.data.message) ||
//       error.message ||
//       error.toString();
//     return thunkAPI.rejectWithValue(message);
//   }
// });

// export const carSlice = createSlice({
//   name: "cars",
//   initialState,
//   reducers: {
//     reset: (state) => initialState,
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(getCars.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(getCars.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isSuccess = true;
//         state.cars = action.payload;
//       })
//       .addCase(getCars.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.message = action.payload;
//       });
//   },
// });

// export const { reset } = carSlice.actions;
// export default carSlice.reducer;
