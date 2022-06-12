import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CallToast } from "../../services/CallToast";
import { Navigate } from "react-router-dom";

const initialState={
    token:localStorage.getItem("token") || null,
    user:localStorage.getItem("user") || null
}

export const signUpUser=createAsyncThunk("auth/signUpUser",async({email,password,name},thunkAPI)=>{
    try {
        const res=await axios.post("/api/auth/signup",{
            username:email,
            password:password,
            name:name
        })
        return res.data;
    } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue(error)
    }
})

export const loginUser=createAsyncThunk("auth/loginUser",async({email,password},thunkAPI)=>{
    try {
        const res=await axios.post("/api/auth/login",{
            username:email,
            password:password,
        })
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})


const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        logoutUser:()=>{
            localStorage.removeItem("token")
            localStorage.removeItem("user")
            return {
                token:null,
                user:null
            }
        }
    },
    extraReducers:{
        [signUpUser.pending]:(state)=>{
            console.log(state)
        },
        [signUpUser.fulfilled]:(state,action)=>{
            state.token=action.payload.encodedToken;
            state.user=action.payload.createdUser;
            localStorage.setItem("token",state.token)
            localStorage.setItem("user",JSON.stringify(state.user))
            CallToast("success","signed up successfully")
        },
        [signUpUser.rejected]:(state,action)=>{
            state.error=action.payload;
            CallToast("error",action.payload.message)
        },
        [loginUser.pending]:(state)=>{
            console.log(state)
        },
        [loginUser.fulfilled]:(state,action)=>{
            state.token=action.payload.encodedToken;
            state.user=action.payload.foundUser;
            localStorage.setItem("token",state.token)
            localStorage.setItem("user",JSON.stringify(state.user))
            CallToast("success","logged in successfully")
        },
        [loginUser.rejected]:(state,action)=>{
            state.error=action.payload;
            CallToast("error",action.payload.message)
        }
    }
})


export const {logoutUser} =authSlice.actions;

export default authSlice.reducer;

