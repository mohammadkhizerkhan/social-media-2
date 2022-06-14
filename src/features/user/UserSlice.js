import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  allUsers: [],
};

export const getAllUsers = createAsyncThunk(
  "user/getAllUsers",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/api/users");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);



const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllUsers.pending]: (state) => {
      console.log(state);
    },
    [getAllUsers.fulfilled]: (state, action) => {
      state.allUsers = action.payload.users;
    },
    [getAllUsers.rejected]: (state, action) => {
      console.log(action.payload);
    },
    
  },
});

export default userSlice.reducer;
