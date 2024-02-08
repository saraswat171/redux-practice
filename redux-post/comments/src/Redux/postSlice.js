import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchPost= createAsyncThunk('post/fetchPost', async ()=>{

    const res =await axios('https://jsonplaceholder.typicode.com/posts');
    // console.log(res.data)
    const data =  res.data;
    return data;
})
const initialState = {
   postdata:[],
   loading:false,
   error:null,
}

export const postSlice = createSlice({
    name :'post',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchPost.pending, (state)=>{
           state.loading=true
        })
        .addCase(fetchPost.fulfilled, (state,action)=>{
            state.loading=false;
            state.postdata=action.payload
            // console.log(state.content)
         })
         .addCase(fetchPost.rejected, (state,action)=>{
            state.loading=false;
            state.error=action.error.message
         })
    },
})
export default postSlice.reducer