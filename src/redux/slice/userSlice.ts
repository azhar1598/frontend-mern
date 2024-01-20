// todoSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allUsers: [],
    loggedinUser: {},
    isAuthenticated: false
};

const userSlice = createSlice({
    name: "allUsers",
    initialState,
    reducers: {
        loggedinUser: (state, action) => {
            state.loggedinUser = action.payload;
            state.isAuthenticated = Object.keys(action.payload).length ? true : false
        },
    },
});

export const { loggedinUser } = userSlice.actions;
export default userSlice.reducer;