import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchComment= createAsyncThunk('comment/fetchComment', async (postId)=>{

    const res =await axios(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
  
    const data =  res.data;

    return {postId,data};
})
const initialState = {
   commentdata:{},
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
            state.loading=false;
            state.commentdata[action.payload.postId]=action.payload.data
          
         })
         .addCase(fetchComment.rejected, (state,action)=>{
            state.loading=false;
            state.error=action.error.message
         })
    },
})
export default commentSlice.reducer





