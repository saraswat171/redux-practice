import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchAlbums= createAsyncThunk('album/fetchAlbums', async ()=>{
    console.log('dffdkg')
    const res =await axios('https://jsonplaceholder.typicode.com/albums');
    console.log(res.data)
    const data =  res.data;
    return data;
})
const initialState = {
   content:[],
   loading:false,
   error:null,
}

export const albumSlice = createSlice({
    name :'album',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchAlbums.pending, (state)=>{
           state.loading=true
        })
        .addCase(fetchAlbums.fulfilled, (state,action)=>{
            state.loading=true;
            state.content=action.payload
            console.log(state.content)
         })
         .addCase(fetchAlbums.rejected, (state,action)=>{
            state.loading=false;
            state.error=action.error.message
         })
    },
})
export default albumSlice.reducer

