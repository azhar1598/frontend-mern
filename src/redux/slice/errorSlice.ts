// todoSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    errMsg: ''
};

const errorSlice = createSlice({
    name: "errMsg",
    initialState,
    reducers: {
        errMsg: (state, action) => {
            state.errMsg = action.payload;
        },
    },
});

export const { errMsg } = errorSlice.actions;
export default errorSlice.reducer;