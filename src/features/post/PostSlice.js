import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  allPost: [],
  userPost: [],
  userBookmarks: [],
  isLoading:false
};

export const getAllPosts = createAsyncThunk(
  "post/getAllPosts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/api/posts");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
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
      return thunkAPI.rejectWithValue(error.message);
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
      return thunkAPI.rejectWithValue(error.message);
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
      return thunkAPI.rejectWithValue(error.message);
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
      return thunkAPI.rejectWithValue(error.message);
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
      return thunkAPI.rejectWithValue(error.message);
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
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getBookmarkPost = createAsyncThunk(
  "posts/getBookmarkPostp",
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("/api/users/bookmark", {
        headers: { authorization: token },
      });
      console.log(response.data)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
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
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addComment = createAsyncThunk(
  "post/addComment",
  async ({ postId, commentData }, thunkAPI) => {
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
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteComment = createAsyncThunk(
  "post/deleteComment",
  async ({ postId, commentId }, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.delete(
        `/api/comments/delete/${postId}/${commentId}`,
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
export const editComment = createAsyncThunk(
  "post/editComment",
  async ({ postId, commentId, commentData }, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `/api/comments/edit/${postId}/${commentId}`,
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
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllPosts.pending]: (state) => {
      state.isLoading=true;
    },
    [getAllPosts.fulfilled]: (state, action) => {
      state.isLoading=false;
      state.allPost = action.payload.posts;
    },
    [getAllPosts.rejected]: (state, action) => {
      console.log(action.payload);
    },
    [getUserPost.pending]: (state) => {
      state.isLoading=true;
    },
    [getUserPost.fulfilled]: (state, action) => {
      state.isLoading=false;
      state.userPost = action.payload.posts;
    },
    [getUserPost.rejected]: (state, action) => {
      console.log(action.payload);
    },
    [createPost.pending]: (state) => {
      state.isLoading=true;
    },
    [createPost.fulfilled]: (state, action) => {
      state.isLoading=false;
      state.allPost = action.payload.posts;
    },
    [createPost.rejected]: (state, action) => {
      console.log(action.payload);
    },
    [deletePost.pending]: (state) => {
      state.isLoading=true;
    },
    [deletePost.fulfilled]: (state, action) => {
      state.isLoading=false;
      state.allPost = action.payload.posts;
    },
    [deletePost.rejected]: (state, action) => {
      console.log(action.payload);
    },
    [editPost.pending]: (state) => {
      state.isLoading=true;
    },
    [editPost.fulfilled]: (state, action) => {
      state.isLoading=false;
      state.allPost = action.payload.posts;
    },
    [editPost.rejected]: (state, action) => {
      console.log(action.payload);
    },
    [likePost.pending]: (state) => {
      state.isLoading=true;
    },
    [likePost.fulfilled]: (state, action) => {
      state.isLoading=false;
      state.allPost = action.payload.posts;
    },
    [likePost.rejected]: (state, action) => {
      console.log(action.payload);
    },
    [dislikePost.pending]: (state) => {
      state.isLoading=true;
    },
    [dislikePost.fulfilled]: (state, action) => {
      state.isLoading=false;
      state.allPost = action.payload.posts;
    },
    [dislikePost.rejected]: (state, action) => {
      console.log(action.payload);
    },
    [addComment.pending]: (state) => {
      state.isLoading=true;
    },
    [addComment.fulfilled]: (state, action) => {
      state.isLoading=false;
      state.allPost = action.payload.posts;
    },
    [addComment.rejected]: (state, action) => {
      console.log(action.payload);
    },
    [deleteComment.pending]: (state) => {
      state.isLoading=true;
    },
    [deleteComment.fulfilled]: (state, action) => {
      state.isLoading=false;
      state.allPost = action.payload.posts;
    },
    [deleteComment.rejected]: (state, action) => {
      console.log(action.payload);
    },
    [editComment.pending]: (state) => {
      state.isLoading=true;
    },
    [editComment.fulfilled]: (state, action) => {
      state.isLoading=false;
      state.allPost = action.payload.posts;
    },
    [editComment.rejected]: (state, action) => {
      console.log(action.payload);
    },
    [getBookmarkPost.pending]: (state) => {
      state.isLoading=true;
    },
    [getBookmarkPost.fulfilled]: (state, action) => {
      state.isLoading=false;
      state.userBookmarks = action.payload.bookmarks;
    },
    [getBookmarkPost.rejected]: (state, action) => {
      console.log(action.payload);
    },
    [addPostToBookmark.pending]: (state) => {
      state.isLoading=true;
    },
    [addPostToBookmark.fulfilled]: (state, action) => {
      state.isLoading=false;
      state.userBookmarks = action.payload.bookmarks;

    },
    [addPostToBookmark.rejected]: (state, action) => {
      console.log(action.payload);
    },
    [removePostFromBookmark.pending]: (state) => {
      state.isLoading=true;
    },
    [removePostFromBookmark.fulfilled]: (state, action) => {
      state.isLoading=false;
      state.userBookmarks = action.payload.bookmarks;
    },
    [removePostFromBookmark.rejected]: (state, action) => {
      console.log(action.payload);
    },
  },
});

export default postSlice.reducer;
