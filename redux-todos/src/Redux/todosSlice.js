import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchTodos= createAsyncThunk('todo/fetchTodos', async ()=>{

    const res =await axios('https://jsonplaceholder.typicode.com/todos');

    const data =  res.data;
    return data;
})
const initialState = {
   tododata:[],
   loading:false,
   error:null,
}

export const todosSlice = createSlice({
    name :'todo',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchTodos.pending, (state)=>{
           state.loading=true
        })
        .addCase(fetchTodos.fulfilled, (state,action)=>{
            state.loading=true;
            state.tododata=action.payload
          
         })
         .addCase(fetchTodos.rejected, (state,action)=>{
            state.loading=false;
            state.error=action.error.message
         })
    },
})
export default todosSlice.reducer