import { useDispatch, useSelector } from "react-redux";

// components
import { Username } from "./Username";
import { Password } from "./Password";

export function CredentialsForm() {
    // create a dispatch function
    const dispatch = useDispatch();

    // state getters

    // state setters

    // handlers

    // utils

    return (
        <form className='w-full h-full flex flex-col justify-center items-center align-middle gap-y-6 md:gap-y-6'>
            <Username />
            <Password />
        </form>
    )
}