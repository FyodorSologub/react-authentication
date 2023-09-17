import { useDispatch, useSelector } from "react-redux";
import { AuthenticationActions } from "../../../store/slices/authentication/AuthenticationSlice";

export function SignUpButton() {
    // create a dispatch function
    const dispatch = useDispatch();

    // state getters

    // state setters
    const goToSignUp = () => dispatch(AuthenticationActions.goToSignUp());

    // handlers
    const handleGoToSignUp = () => goToSignUp();

    // utils

    return (
        <div className='text-center'>
            <button 
                className="font-sans text-thin lg:font-extralight antialiased tracking-normal text-zinc-700 lg:text-zinc-700 hover:text-black underline hover:underline-black underline-offset-1"
                onClick={ handleGoToSignUp }
            >
                Sign up
            </button>
        </div>
    )
}