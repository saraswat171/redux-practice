import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux'
import contentReducer from './contentSlice'
import userReducer from './user.slice'

const hjhg= combineReducers({
content: contentReducer,
user: userReducer
})

export const store = configureStore({
    reducer :hjhg,
})