import { configureStore } from "@reduxjs/toolkit";

// slices
import { SignInSlice } from "./slices/signIn/SignInSlice";
import { SignUpSlice } from "./slices/signUp/SignUpSlice";
import { AuthenticationSlice } from "./slices/authentication/AuthenticationSlice";

export const store = configureStore(
    {
        reducer: {
            SignIn: SignInSlice.reducer,
            SignUp: SignUpSlice.reducer,
            Authentication: AuthenticationSlice.reducer,
        },
    }
);