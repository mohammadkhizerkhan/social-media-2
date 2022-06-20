import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CallToast } from "../../services/CallToast";

const initialState = {
  isLoading:false,
  token: localStorage.getItem("token") || "",
  user: JSON.parse(localStorage.getItem("user")) || {},
  error:""
};

export const signUpUser = createAsyncThunk(
  "auth/signUpUser",
  async ({ email, password, name }, thunkAPI) => {
    try {
      const res = await axios.post("/api/auth/signup", {
        username: email,
        password: password,
        name: name,
      });
      return res.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, thunkAPI) => {
    try {
      const res = await axios.post("/api/auth/login", {
        username: email,
        password: password,
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async ({userData}, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "/api/users/edit",
        {
          userData,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
);


export const followUser = createAsyncThunk(
  "user/followUser",
  async ({ userId }, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `/api/users/follow/${userId}`,
        {},
        {
          headers: {
            authorization: token,
          },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const unFollowUser = createAsyncThunk(
  "user/followUser",
  async ({ userId }, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `/api/users/unfollow/${userId}`,
        {},
        {
          headers: {
            authorization: token,
          },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: (state,action) => {
      state.user={};
      state.token="";
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      CallToast("success", "Logged out Successfully");
      action.payload.navigate("/login")
    },
  },
  extraReducers: {
    [signUpUser.pending]: (state) => {
      console.log(state);
    },
    [signUpUser.fulfilled]: (state, action) => {
      state.token = action.payload.encodedToken;
      state.user = action.payload.createdUser;
      localStorage.setItem("token", state.token);
      localStorage.setItem("user", JSON.stringify(state.user));
      CallToast("success", "signed up successfully");
    },
    [signUpUser.rejected]: (state, action) => {
      state.error = action.payload;
      CallToast(
        "error",
        action.payload.response.status === 422 &&
          "User email is already present."
      );
    },
    [loginUser.pending]: (state) => {
      console.log(state);
    },
    [loginUser.fulfilled]: (state, action) => {
      state.token = action.payload.encodedToken;
      state.user = action.payload.foundUser;
      localStorage.setItem("token", state.token);
      localStorage.setItem("user", JSON.stringify(state.user));
      CallToast("success", "logged in successfully");
    },
    [loginUser.rejected]: (state, action) => {
      state.error = action.payload;
      CallToast(
        "error",
        action.payload.response.status === 404
          ? "User is not registered, Please SignUp"
          : action.payload.response.status === 401 && "invalid credentials"
      );
    },
    [updateUser.pending]: (state) => {
      console.log(state);
    },
    [updateUser.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    [updateUser.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [followUser.pending]: (state) => {
      state.isLoading=true;
    },
    [followUser.fulfilled]: (state, action) => {
      state.isLoading=false;
      state.user=action.payload.user;
    },
    [followUser.rejected]: (state, action) => {
      state.error=action.payload
    },
    [unFollowUser.pending]: (state) => {
      state.isLoading=true;
    },
    [unFollowUser.fulfilled]: (state, action) => {
      state.isLoading=false;
      state.user=action.payload.user;
    },
    [unFollowUser.rejected]: (state, action) => {
      state.error=action.payload
    },
  },
});

export const { logoutUser } = authSlice.actions;

export default authSlice.reducer;
