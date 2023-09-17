import { useDispatch, useSelector } from "react-redux";

// components
import { SignInButton } from "./SignInButton";
import { SignUpButton } from "./SignUpButton";

export function ActionsForm() {
    // create a dispatch function
    const dispatch = useDispatch();

    // state getters

    // state setters

    // handlers

    // utils

    return (
        <form className='flex flex-col gap-y-3 lg:gap-y-2 mt-5 pb-5 md:pb-0 md:mt-5 lg:mt-0'>
            <SignInButton />
            <p className='font-sans text-center text-sm lg:text-xs antialiased font-thin text-zinc-500'>or</p>
            <SignUpButton />
        </form>
    )
}