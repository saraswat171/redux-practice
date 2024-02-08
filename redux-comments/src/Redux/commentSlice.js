import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchComment= createAsyncThunk('comment/fetchComment', async ()=>{

    const res =await axios('https://jsonplaceholder.typicode.com/comments');

    const data =  res.data;
    return data;
})
const initialState = {
   commentdata:[],
   loading:false,
   error:null,
}

export const commentSlice = createSlice({
    name :'comment',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchComment.pending, (state)=>{
           state.loading=true
        })
        .addCase(fetchComment.fulfilled, (state,action)=>{
            state.loading=true;
            state.commentdata=action.payload
          
         })
         .addCase(fetchComment.rejected, (state,action)=>{
            state.loading=false;
            state.error=action.error.message
         })
    },
})
export default commentSlice.reducer