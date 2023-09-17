import { useSelector } from "react-redux";

// components
import { SignIn } from "../components/SignIn/SignIn";
import { SignUp } from "../components/SignUp/SignUp";

export function Authentication() {
    // state getters
    const stage = useSelector((state) => state.Authentication.stage);

    return (
        <div className="w-screen h-screen min-h-fit p-5 flex flex-col justify-center items-center bg-red-100">
            { stage === 'SignIn' && <SignIn /> }
            { stage === 'SignUp' && <SignUp /> }
        </div>
    )
}