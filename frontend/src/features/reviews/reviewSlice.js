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