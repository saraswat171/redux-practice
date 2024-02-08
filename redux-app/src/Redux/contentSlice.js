import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    content:[],
    loading:false,
    error:null,
}

export const fetchContent = createAsyncThunk('content/fetchContent',
async ()=>{
    const res =await axios('https://jsonplaceholder.typicode.com/photos');
    const data = await res.data;
    return data;
})

export const contentSlice = createSlice ({
    name:'content',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchContent.pending, (state)=>{
            state.loading=true
        })
        .addCase(fetchContent.fulfilled, (state,action)=>{
            state.loading=true;
            state.content=action.payload
        })
        .addCase(fetchContent.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.error.message
        })

    },
})
export default contentSlice.reducer