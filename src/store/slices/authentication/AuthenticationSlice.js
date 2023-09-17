import { createSlice } from "@reduxjs/toolkit";
import { defaultState } from "./defaultState";

export const AuthenticationSlice = createSlice (
    {
        name: "Authentication",

        initialState: defaultState,

        reducers: {
            goToSignIn(state) { state.stage = 'SignIn' }, 
            goToSignUp(state) { state.stage = 'SignUp' },
            authenticate(state) { state.isAuthenticated = true },
            logOut(state) { state.isAuthenticated = false },
            setFinalusername(state, actions) { state.finalUsername = actions.payload.finalUsername }
        }
    }
)

export const AuthenticationActions = AuthenticationSlice.actions;

