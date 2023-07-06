import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setAuthToken } from '../../utils/AuthToken';
import {axiosPrivate}from '../hooks/axiosInstance';
import { getUser } from './userInfoSlice';

export const refresh = createAsyncThunk('refresh/getRefresh', async (_, thunkAPI) => {
    try {
      const response = await axiosPrivate.get('/refresh');
      const { accessToken } = response.data;
      setAuthToken(accessToken); // Set the token in the header
      thunkAPI.dispatch(getUser());
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  });
  

const refreshSlice = createSlice({
  name: 'refresh',
  initialState: {
    loading: false,
    error: null,
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(refresh.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(refresh.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(refresh.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.msg;
      });
  },
});



export default refreshSlice.reducer;
