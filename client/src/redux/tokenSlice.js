import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  guest:
  localStorage.getItem("guest") === null
      ? {}
      : JSON.parse(localStorage.getItem("guest")),
  token:
  localStorage.getItem("token") === null
      ? ""
      : JSON.parse(localStorage.getItem("token")),
};

const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setGuestdata: (state, action) => {
      const { guest, token } = action.payload;
      state.guest = guest;
      state.token = token;
      localStorage.setItem("guest", JSON.stringify(state.guest));
    },
    setToken: (state, action) => {
      const { token } = action.payload;
      state.token = token;
      localStorage.setItem("token", JSON.stringify(state.token));
    },
    logOut: (state) => {
      state.guest = null;
      state.token = null;
      localStorage.setItem("guest", null);
      localStorage.setItem("token", null);
    },
  },
});



export default tokenSlice.reducer;
export const { setToken, setGuestdata, logOut } = tokenSlice.actions;

export const selectCurrentGuest = (state) => state.token.guest;
export const selectCurrentToken = (state) => state.token.token;
