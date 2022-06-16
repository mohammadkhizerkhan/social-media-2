import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  allPost: [],
  userPost: [],
};

export const getAllPosts = createAsyncThunk(
  "post/getAllPosts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/api/posts");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getUserPost = createAsyncThunk(
  "post/getUserPost",
  async (username, thunkAPI) => {
    try {
      const response = await axios.get(`/api/posts/user/${username}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createPost = createAsyncThunk(
  "post/createPost",
  async (postData, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "/api/posts",
        { postData },
        { headers: { authorization: token } }
      );
      return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
  }
);
export const deletePost = createAsyncThunk(
  "post/deletePost",
  async (postId, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.delete(
        `/api/posts/${postId}`,
        { headers: { authorization: token } }
      );
      return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
  }
);

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllPosts.pending]: (state) => {
      // console.log(state)
    },
    [getAllPosts.fulfilled]: (state, action) => {
      state.allPost = action.payload.posts;
    },
    [getAllPosts.rejected]: (state, action) => {
      console.log(action.payload);
    },
    [getUserPost.pending]: (state) => {
      // console.log(state)
    },
    [getUserPost.fulfilled]: (state, action) => {
      state.userPost = action.payload.posts;
    },
    [getUserPost.rejected]: (state, action) => {
      console.log(action.payload);
    },
    [createPost.pending]: (state) => {
      // console.log(state)
    },
    [createPost.fulfilled]: (state, action) => {
      state.allPost = action.payload.posts;
    },
    [createPost.rejected]: (state, action) => {
      console.log(action.payload);
    },
    [deletePost.pending]: (state) => {
      // console.log(state)
    },
    [deletePost.fulfilled]: (state, action) => {
      state.allPost = action.payload.posts;
    },
    [deletePost.rejected]: (state, action) => {
      console.log(action.payload);
    },
  },
});

export default postSlice.reducer;
