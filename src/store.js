import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/AuthSlice";
import postReducer from "./features/post/PostSlice";
import userReducer from "./features/user/UserSlice"
export const store = configureStore({
  reducer: {
    auth: authReducer,
    post:postReducer,
    user:userReducer,
  },
});
