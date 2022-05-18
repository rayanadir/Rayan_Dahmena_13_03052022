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

/**
 * Combines reducers (login and user)
 */
const rootReducer = combineReducers({
    login: loginReducer,
    user: userReducer
}) 

/**
 * Creates persist configuration
 */
const persistConfig = {
 key: 'root',
 version: 1,
 storage,
}

/**
 * Creates persistedReducer
 */
const persistedReducer = persistReducer(persistConfig, rootReducer);

/**
 * Configures store
 */
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })
  