import { createSlice } from "@reduxjs/toolkit";

const userState={
    email:null,
    firstName:null,
    lastName:null,
    id:null,
    error:null,
}

const userSlice = createSlice({
    name:"user",
    initialState:userState,
    reducers:{
        userSuccess: (state, action) => {
            state.email=action.payload.body.email;
            state.firstName=action.payload.body.firstName;
            state.lastName=action.payload.body.lastName;
            state.id=action.payload.body.id;
            state.error=null;
        },
        userFail: (state, action) => {
            state.email=null;
            state.firstName=null;
            state.lastName=null;
            state.id=null;
            state.error=action.payload.message
        }
    }
})

export const { userSuccess, userFail } = userSlice.actions;

export const userReducer = userSlice.reducer;