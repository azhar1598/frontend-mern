// store.js

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slice/userSlice.js";
import errorReducer from './slice/errorSlice.js'

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
    key: "root",
    storage,
};

const rootReducer = combineReducers({
    usersReducer,
    errorReducer
});


const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({

    reducer: persistedReducer,
});

export const persistor = persistStore(store);