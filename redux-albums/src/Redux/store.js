import { configureStore } from "@reduxjs/toolkit";
import albumSlice from './albumsSlice'

export const store =configureStore({
    reducer:{
        album : albumSlice,
    }
})