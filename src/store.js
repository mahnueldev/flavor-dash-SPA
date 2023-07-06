import { configureStore } from "@reduxjs/toolkit";
import authReducer from './features/auth/authSlice';
import refreshReducer from './features/auth/authSlice';
import userInfoReducer from './features/auth/userInfoSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        refresh: refreshReducer,
        userInfo: userInfoReducer,
       
      },
})