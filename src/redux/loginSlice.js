import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: 'loggedIn',
    initialState: false,
    reducers: {
        toggle: (state) => !state,
        setTrue: (state) => true,
        setFalse: (state) => false
    },
});

export const { toggle, setTrue, setFalse} = loginSlice.actions;

export default loginSlice.reducers;
