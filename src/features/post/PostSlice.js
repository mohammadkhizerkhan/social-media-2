import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  allPost: [],
  userPost: [],
  userBookmarks: [],
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
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const deletePost = createAsyncThunk(
  "post/deletePost",
  async (postId, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.delete(`/api/posts/${postId}`, {
        headers: { authorization: token },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const editPost = createAsyncThunk(
  "post/editpost",
  async ({ postData, postId }, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `/api/posts/edit/${postId}`,
        { postData },
        { headers: { authorization: token } }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const likePost = createAsyncThunk(
  "post/likePost",
  async (postId, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `/api/posts/like/${postId}`,
        {},
        { headers: { authorization: token } }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const dislikePost = createAsyncThunk(
  "post/dislikePost",
  async (postId, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `/api/posts/dislike/${postId}`,
        {},
        { headers: { authorization: token } }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const addPostToBookmark = createAsyncThunk(
  "post/addPostToBookmark",
  async (postId, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `/api/users/bookmark/${postId}`,
        {},
        { headers: { authorization: token } }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const removePostFromBookmark = createAsyncThunk(
  "post/removePostFromBookmark",
  async (postId, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `/api/users/remove-bookmark/${postId}`,
        {},
        { headers: { authorization: token } }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const addComment = createAsyncThunk(
  "post/addComment",
  async ({ postId, commentData }, thunkAPI) => {
    // console.log(commentData)
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `/api/comments/add/${postId}`,
        {
          commentData,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error)
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
    [editPost.pending]: (state) => {
      // console.log(state)
    },
    [editPost.fulfilled]: (state, action) => {
      state.allPost = action.payload.posts;
    },
    [editPost.rejected]: (state, action) => {
      console.log(action.payload);
    },
    [likePost.pending]: (state) => {
      // console.log(state)
    },
    [likePost.fulfilled]: (state, action) => {
      state.allPost = action.payload.posts;
    },
    [likePost.rejected]: (state, action) => {
      console.log(action.payload);
    },
    [dislikePost.pending]: (state) => {
      // console.log(state)
    },
    [dislikePost.fulfilled]: (state, action) => {
      state.allPost = action.payload.posts;
    },
    [dislikePost.rejected]: (state, action) => {
      console.log(action.payload);
    },
    [addComment.pending]: (state) => {
      // console.log(state)
    },
    [addComment.fulfilled]: (state, action) => {
      state.allPost = action.payload.posts;
    },
    [addComment.rejected]: (state, action) => {
      console.log(action.payload);
    },
    [addPostToBookmark.pending]: (state) => {
      // console.log(state)
    },
    [addPostToBookmark.fulfilled]: (state, action) => {
      state.userBookmarks = action.payload.bookmarks;
    },
    [addPostToBookmark.rejected]: (state, action) => {
      console.log(action.payload);
    },
    [removePostFromBookmark.pending]: (state) => {
      // console.log(state)
    },
    [removePostFromBookmark.fulfilled]: (state, action) => {
      state.userBookmarks = action.payload.bookmarks;
    },
    [removePostFromBookmark.rejected]: (state, action) => {
      console.log(action.payload);
    },
  },
});

export default postSlice.reducer;
