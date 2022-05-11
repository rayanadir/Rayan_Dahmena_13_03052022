import { createSlice } from "@reduxjs/toolkit";

const initialState={
    email:"",
    token:"",
    isLoading: false,
    isAuth: false,
    error:"",
}

const loginSlice= createSlice({
    name:"login",
    initialState:initialState,
    reducers:{
        loginPending: (state) => {
            state.email="";
            state.token="";
            state.isLoading=true;
            state.isAuth=false;
            state.error="";
        },
        loginSuccess: (state, action) => {
            state.email=action.payload;
            state.token=action.payload;
            state.isLoading=false;
            state.isAuth=true;
            state.error="";
        },
        loginFail: (state, action) =>{
            state.email="";
            state.token="";
            state.isLoading=false;
            state.isAuth=false;
            state.error= action.payload;
        }
    }
})

export const { loginPending, loginSuccess, loginFail } = loginSlice.actions;

export const userReducer= loginSlice.reducer ;