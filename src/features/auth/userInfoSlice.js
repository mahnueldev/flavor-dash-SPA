import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setAuthToken, getAuthToken } from '../../utils/AuthToken';
import {  axiosPrivate } from '../hooks/axiosInstance';

export const getUser = createAsyncThunk('user/getUser', async (_, thunkAPI) => {
  try {
    const response = await axiosPrivate.get('/api/user');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});
export const deleteUser = createAsyncThunk('user/deleteUser', async (_, thunkAPI) => {
  try {
    const response = await axiosPrivate.delete('/api/user');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const logout = createAsyncThunk('user/logout', async (_, thunkAPI) => {
  try {
    setAuthToken(null);
    const response = await axiosPrivate.get('/api/logout');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const userInfoSlice = createSlice({
  name: 'user',
  initialState: {
    user: getAuthToken(),
    loading: false,
    error: null,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // getUser
      .addCase(getUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.error = null;
        state.success = true;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.success = false;
        state.loading = false;
        state.error = action.payload;
      })
      // deleteUser
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.success = false;
        state.loading = false;
        state.error = action.payload.msg;
      })
       // logoutUser
       .addCase(logout.pending, (state) => {
        state.loading = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.msg;
      });
  },
});

export default userInfoSlice.reducer;
