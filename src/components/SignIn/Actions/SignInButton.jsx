import { useDispatch, useSelector } from "react-redux";
import { AuthenticationActions } from '../../../store/slices/authentication/AuthenticationSlice'

export function SignInButton() {
    // create a dispatch function
    const dispatch = useDispatch();

    // state getters
    const usernameLengthIsCorrect = useSelector((state) => state.SignIn.usernameLengthIsCorrect);
    const passwordLengthIsCorrect = useSelector((state) => state.SignIn.passwordLengthIsCorrect);
    const username = useSelector((state) => state.SignIn.username);

    // state setters
    const authenticate = () => dispatch(AuthenticationActions.authenticate());
    const setFinalusername = (finalUsername) => dispatch(AuthenticationActions.setFinalusername({finalUsername}));

    // handlers
    const handleAutenticate = () => {
        if(usernameLengthIsCorrect === false || passwordLengthIsCorrect === false ) return;
        setFinalusername(username);
        authenticate();
    }
    const handleSignIn = (event) => {event.preventDefault(); handleAutenticate()};

    // utils

    return (
        <div className='text-center w-full'>
            <button 
                className={ 
                    usernameLengthIsCorrect && passwordLengthIsCorrect
                        ? 'px-5 py-3 rounded-md shadow-sm font-sans text-sm font-thin select-none bg-zinc-900 text-white'
                        : 'px-5 py-3 rounded-md shadow-sm font-sans text-sm font-thin select-none bg-slate-100 text-slate-400'
                }
                onClick={ handleSignIn }
            >
                Sign in
            </button>
        </div>
    )
}