import { createSlice } from "@reduxjs/toolkit";

const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

const initialState = {
  userName: "",
  isAuthenticated: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      console.log(action);

      if (
        action.payload.userName === FAKE_USER.name &&
        action.payload.password === FAKE_USER.password
      ) {
        state.userName = action.payload.userName;
        state.isAuthenticated = true;
      }
    },

    logout: (state) => {
      state.userName = "";
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
