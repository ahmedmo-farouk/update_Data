import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../pages/UserReducer";
export const store = configureStore({
    reducer:{
        users: UserReducer
    }
})