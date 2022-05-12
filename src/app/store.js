import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "../slices/loginSlice";
import { userReducer } from "../slices/userSlice";

export default configureStore({
    reducer:{
        login: loginReducer,
        user: userReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck:false}),
})