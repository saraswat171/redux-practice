import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    usersdata:[],
    loading:false,
    error:null,
}

export const fetchUsers = createAsyncThunk('users/fetchUsers',
async ()=>{
    const res =await axios('https://jsonplaceholder.typicode.com/users');
    const data = await res.data;
    return data;
})

export const UserSlice = createSlice ({
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
            state.usersdata=action.payload
        })
        .addCase(fetchUsers.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.error.message
        })

    },
})
export default UserSlice.reducer