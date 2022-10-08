import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import reviewService from './reviewService';

const initialState = {
  reviews: [],
  review: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
}


// Create new review
export const createReview = createAsyncThunk(
  'reviews/create',
  async (reviewData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await reviewService.createReview(reviewData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);


// Get user reviews
export const getReviews = createAsyncThunk(
  'reviews/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await reviewService.getReviews(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);


export const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
    reset: (state) => initialState
  },
  extraReducers: (builder) => {
    builder
      .addCase(createReview.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createReview.fulfilled, (state) => {
        state.isLoading = false
        state.isSuccess = true
      })
      .addCase(createReview.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getReviews.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getReviews.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.reviews = action.payload
      })
      .addCase(getReviews.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

  }
})

export const { reset } = reviewSlice.actions
export default reviewSlice.reducer
