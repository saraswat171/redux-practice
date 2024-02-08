import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    users:[],
    loading:false,
    error:null,
}

export const fetchUsers = createAsyncThunk('users/fetchUsers',
async ()=>{
    const res =await axios('https://jsonplaceholder.typicode.com/users');
    const data = await res.data;
    return data;
})

export const usersSlice = createSlice ({
    name:'users',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchUsers.pending, (state)=>{
            state.loading=true
        })
        .addCase(fetchUsers.fulfilled, (state,action)=>{
            state.loading=true;
            state.users=action.payload
        })
        .addCase(fetchUsers.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.error.message
        })

    },
})
export default usersSlice.reducer