import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    allPost:[],
    userPost:[]
}

export const getAllPosts=createAsyncThunk("post/getAllPosts",async(_,thunkAPI)=>{
    try {
        const response=await axios.get("/api/posts");
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

const postSlice=createSlice({
    name:"post",
    initialState,
    reducers:{},
    extraReducers:{
        [getAllPosts.pending]:(state)=>{
            console.log(state)
        },
        [getAllPosts.fulfilled]:(state,action)=>{
            state.allPost=action.payload.posts
        },
        [getAllPosts.rejected]:(state,action)=>{
            console.log(action.payload)
        },
        
    }
})


export default postSlice.reducer;