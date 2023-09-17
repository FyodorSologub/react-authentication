import { useDispatch, useSelector } from "react-redux";
import Avatar, { genConfig } from 'react-nice-avatar';
import { AuthenticationActions } from "../store/slices/authentication/AuthenticationSlice";
import { SignInActions } from "../store/slices/signIn/SignInSlice";
import { SignUpActions } from "../store/slices/signUp/SignUpSlice";

export function Authenticated() {
    // create a dispatch function
    const dispatch = useDispatch();

    // state getters
    const username = useSelector((state) => state.Authentication.finalUsername);
    const config = useSelector((state) => state.SignUp.avatarConfig);

    // state setters
    const logOut = () => dispatch(AuthenticationActions.logOut());
    const dropSignInUsername = () => dispatch(SignInActions.dropSignInUsername());
    const dropSignInPassword = () => dispatch(SignInActions.dropSignInPassword());
    const dropSignUpUsername = () => dispatch(SignUpActions.dropSignUpUsername());
    const dropSignUpPassword = () => dispatch(SignUpActions.dropSignUpPassword());
    const dropSignUpPasswordCopy = () => dispatch(SignUpActions.dropSignUpPasswordCopy());
    const setStepDefault = () => dispatch(SignUpActions.setStepDefault());
    const setUsernameMessageDefault = () => dispatch(SignUpActions.setUsernameMessageDefault());
    const setPasswordMessageDefault = () => dispatch(SignUpActions.setPasswordMessageDefault());
    const setPasswordCopyMessageDefault = () => dispatch(SignUpActions.setPasswordCopyMessageDefault());
    const hidePassword = () => dispatch(SignUpActions.hidePassword());
    const hidePasswordCopy = () => dispatch(SignUpActions.hidePasswordCopy());

    // handlers
    const handleLogOut = () => {
        dropSignInUsername();
        dropSignInPassword();
        dropSignUpUsername();
        dropSignUpPassword();
        dropSignUpPasswordCopy();
        setStepDefault();
        setUsernameMessageDefault();
        setPasswordMessageDefault();
        setPasswordCopyMessageDefault();
        hidePassword();
        hidePasswordCopy();
        logOut();
    }


    return (
        <div className="w-screen h-screen min-h-fit p-5 flex flex-col justify-center items-center bg-slate-50">
            <div className="w-full h-full flex flex-col justify-center items-center">
                <h1 className="font-sans text-3xl md:text-6xl antialiased font-thin tracking-wide text-center mb-10">Сongratulations!</h1>
                <div className="w-full h-max flex flex-col gap-y-4 justify-center items-center mb-5">
                    <h3 className="font-sans antialiased font-thin text-xl tracking-wide leading-5 text-center">You've signed in, { username }</h3>
                    <div className="flex flex-col justify-start items-center">
                        <Avatar className='w-72 h-72 border border-slate-500 border-rounded' shape='circle' {...genConfig(config)} />
                    </div>
                    <p className="font-sans antialiased font-thin text-sm tracking-wide leading-5 text-center">here's your stunning avatar</p>
                </div>
                <div className='text-center w-full'>
                    <button onClick={ handleLogOut } className='px-5 py-3 rounded-md shadow-sm font-sans text-sm font-thin select-none bg-zinc-900 text-white'>
                        Log out
                    </button>
                </div>
            </div>
        </div>
    )
}