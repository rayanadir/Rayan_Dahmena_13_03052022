import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "../slices/loginSlice";
import { userReducer } from "../slices/userSlice";
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    login: loginReducer,
    user: userReducer
}) 

const persistConfig = {
 key: 'root',
 version: 1,
 storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })
  