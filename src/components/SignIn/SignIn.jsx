import { useDispatch, useSelector } from "react-redux";

// components
import { SignInHeader } from "./SignInHeader/SignInHeader";
import { CredentialsForm } from "./Credentials/CredentialsForm";
import { ActionsForm } from "./Actions/ActionsForm";

export function SignIn() {
    // create a dispatch function

    // state getters

    // state setters

    // handlers

    // utils

    return (
        <div className="flex flex-col md:w-5/6 md:h-5/6 lg:w-3/6 lg:h-4/6 bg-slate-50 shadow-2xl rounded-lg lg:rounded-md w-full h-full p-10 md:p-10">
            <SignInHeader />
            <CredentialsForm />
            <ActionsForm />
        </div>
    )
}