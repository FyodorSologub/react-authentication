import { createSlice } from "@reduxjs/toolkit";
import { defaultState } from './defaultState';


export const SignUpSlice = createSlice(
  {
    name: "SignUp",

    initialState: defaultState,
  
    reducers: {
        // mobile view reducers
        mobileToggleBlocks(state) {
            state.mobileShowSettings = !state.mobileShowSettings;
        },

        // step reducers
        goStepForward(state) {
            state.step = state.step + 1;
        },
        goStepBack(state) {
            state.step = state.step - 1;
        },
        setStepDefault(state) {
            state.step = 1;
        },

        // credentials reducers
        updateUsername(state, actions) {
            state.username = actions.payload.username;
        },
        dropSignUpUsername(state) {
            state.username = '';
        },
        updatePassword(state, actions) {
            state.password = actions.payload.password;
        },
        dropSignUpPassword(state) {
            state.password = '';
        },
        updatePasswordCopy(state, actions) {
            state.passwordCopy = actions.payload.passwordCopy;
        },
        dropSignUpPasswordCopy(state) {
            state.passwordCopy = '';
        },

        // input lables reducers
        setUsernameMessageDefault(state) {
            state.usernameMessage = 'between 5 and 15 symbols';
        },
        setUsernameMessageErrorShort(state) {
            state.usernameMessage = 'username is too short!';
        },
        setUsernameMessageErrorLong(state) {
            state.usernameMessage = 'username is too long!';
        },
        setUsernameMessageErrorSymbols(state) {
            state.usernameMessage = "username can't contain special symbols!";
        },
        setUsernameMessageApproved(state) {
            state.usernameMessage = "great username you've got!";
        },

        setPasswordMessageDefault(state) {
            state.passwordMessage = '6 symbols or more';
        },
        setPasswordMessageErrorWeak(state) {
            state.passwordMessage = 'password too weak!';
        },
        setPasswordMessageApprovedMedium(state) {
            state.passwordMessage = 'medium password!';
        },
        setPasswordMessageApprovedStrong(state) {
            state.passwordMessage = 'strong password!';
        },

        setPasswordCopyMessageDefault(state) {
            state.passwordCopyMessage = '6 symbols or more';
        },
        setPasswordCopyMessageErrorMatch(state) {
            state.passwordCopyMessage = "passwords don't match!";
        },
        setPasswordCopyMessageApproved(state) {
            state.passwordCopyMessage = 'passwords match';
        },

        // password inputs type reducers
        showPassword(state) {
            state.passwordInputType = 'text';
        },
        hidePassword(state) {
            state.passwordInputType = 'password';
        },
        showPasswordCopy(state) {
            state.passwordCopyInputType = 'text';
        },
        hidePasswordCopy(state) {
            state.passwordCopyInputType = 'password';
        },

        // avatar config reducers
        updateAvatarConfig(state, actions) {
            state.avatarConfig[actions.payload.key] = actions.payload.value;
        },

    },
  }
);

export const SignUpActions = SignUpSlice.actions;