import { useDispatch, useSelector } from "react-redux";
import { AuthenticationActions } from "../../../../store/slices/authentication/AuthenticationSlice"

export function GreetingsStep() {
    // create a dispatch function
    const dispatch = useDispatch();

    // state getters

    // state setters
    const goToSignIn = () => dispatch(AuthenticationActions.goToSignIn());

    // handlers
    const handleGoToSignIn = () => goToSignIn();

    // utils

    return (
        <div className="w-full h-full justify-center align-middle flex flex-col gap-y-3 lg:gap-y-4 p-10">
            <h1 className="font-sans text-3xl md:text-4xl antialiased font-thin tracking-wide text-center">Let's sign you up!</h1>
            <div className='text-center'>
                <p className='font-sans text-sm lg:text-xs antialiased font-thin text-zinc-500'>or</p>
            </div>
            <div className='text-center'>
                <button 
                    className="font-sans text-thin lg:font-extralight antialiased tracking-normal text-zinc-700 lg:text-zinc-700 hover:text-black underline hover:underline-black underline-offset-1"
                    onClick={ handleGoToSignIn }
                >
                    Sign in
                </button>
            </div>
        </div>
    )
}