import { createSlice } from '@reduxjs/toolkit';

import api from './api';

const tokenSlice = createSlice({
    name: "token",
    initialState: localStorage.getItem('token') ?? null,
    reducers: {
        setToken: (_state, {payload}) => {
            const {token} = payload;
            // save the new token state in localstorage
            if (!token) {
                localStorage.removeItem('token');
                return null;
            } else {
                localStorage.setItem('token', token);
                // return the new token state
                return token;
            }
        }
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            api.endpoints.register.matchFulfilled,
            (state, {payload}) => {
                const {token} = payload;
                // update local storage with the token
                localStorage.setItem('token', token);
                return token;
            }
        );

        builder.addMatcher(
            api.endpoints.login.matchFulfilled,
            (state, {payload}) => {
                const {token} = payload;
                // update local storage with the token
                localStorage.setItem('token', token);
                return token;
            }
        )
    }
});

export default tokenSlice.reducer;

export const {setToken} = tokenSlice.actions;