import { createSlice } from "@reduxjs/toolkit";
import { defaultState } from './defaultState';


export const SignInSlice = createSlice (
  {
    name: "SignIn",

    initialState: defaultState,
  
    reducers: {
      updateUsername(state, actions) {
        state.username = actions.payload.username;
      },
      dropSignInUsername(state) {
        state.username = '';
      },
      setUsernameCheckToTrue(state) {
        state.usernameLengthIsCorrect = true;
      },
      setUsernameCheckToFalse(state) {
        state.usernameLengthIsCorrect = false;
      },
      updatePassword(state, actions) {
        state.password = actions.payload.password;
      },
      dropSignInPassword(state) {
        state.password = '';
      },
      setPasswordCheckToTrue(state) {
        state.passwordLengthIsCorrect = true;
      },
      setPasswordCheckToFalse(state) {
        state.passwordLengthIsCorrect = false;
      },
      showPassword(state) {
        state.passwordInputType = 'text';
      },
      hidePassword(state) {
        state.passwordInputType = 'password';
      },
    },
  }
);

export const SignInActions = SignInSlice.actions;