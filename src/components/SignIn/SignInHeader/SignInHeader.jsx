import { useDispatch, useSelector } from "react-redux";
import { SignInActions } from "../../../store/slices/signIn/SignInSlice";

export function SignInHeader() {
    // create a dispatch function
    const dispatch = useDispatch();

    // state getters

    // state setters

    // handlers

    // utils

    return (
        <h1 className="font-sans text-3xl md:text-4xl antialiased font-thin tracking-wide text-center mb-5 md:mb-10">Sign in to continue</h1>
    )
}