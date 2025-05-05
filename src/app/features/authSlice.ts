import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError, isAxiosError } from "axios";

interface SignupState {
    loading: boolean;
  success: boolean;
  error: string | null;
}


const initialState: SignupState ={
    loading: false,
    success: false,
    error: ""
}

export const signupUser = createAsyncThunk(
    "auth/signupUser",
    async (formData: any, thunkAPI) => {
      try {
        const response = await axios.post(
          "http://mavericksgrp-001-site1.ktempurl.com/api/Users/Register",
          formData
        );
        return response.data;
      } catch (err) {
        const error = err as AxiosError;
  
        if (error.response && error.response.data) {
          const data = error.response.data as { message?: string; [key: string]: any };
          return thunkAPI.rejectWithValue(data.message || "Signup failed");
        }
  
        return thunkAPI.rejectWithValue(error.message || "Signup failed");
      }
    }
  );





const authSlice = createSlice({
    name:"authSlice",
    initialState,
    reducers: {
        resetStatus: (state)=>{
            state.loading =false
            state.success=false
            state.error=""
        },
    },
    extraReducers: (builder)=>{
        builder
        .addCase(signupUser.pending, (state)=>{
            state.loading = true
            state.success =false
            state.error =""
        })
        .addCase(signupUser.fulfilled, (state) => {
            state.loading = false;
            state.success = true;
          })
         .addCase(signupUser.rejected, (state, action) => {
            state.loading = false;
            state.success = false;
            state.error = action.payload as string;
          });
    }
})

export const {resetStatus} = authSlice.actions
export default authSlice.reducer


