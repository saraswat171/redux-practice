import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux'
import commentSlice from "./commentSlice";
import postSlice from "./postSlice";

const rootReducer= combineReducers({
comment: commentSlice,
post: postSlice
})

export const store = configureStore({
    reducer :rootReducer,
})