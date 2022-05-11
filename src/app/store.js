import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../slices/loginSlice";

export default configureStore({
    reducer:{
        user: userReducer,
    }
})