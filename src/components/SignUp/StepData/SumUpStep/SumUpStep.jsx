import { useDispatch, useSelector } from "react-redux";
import Avatar, { genConfig } from 'react-nice-avatar'
import { AuthenticationActions } from '../../../../store/slices/authentication/AuthenticationSlice'

export function SumUpStep() {
    // create a dispatch function
    const dispatch = useDispatch();

    // state getters
    const username = useSelector((state) => state.SignUp.username);
    const config = useSelector((state) => state.SignUp.avatarConfig);

    // state setters
    const authenticate = () => dispatch(AuthenticationActions.authenticate());
    const setFinalusername = (finalUsername) => dispatch(AuthenticationActions.setFinalusername({finalUsername}));

    // handlers
    const handleSignUp = (event) => { event.preventDefault(); setFinalusername(username); authenticate(); };

    // utils

    return (
        <div className="w-full h-full flex flex-col items-center justify-center lg:justify-start gap-y-5 md:gap-y-10 lg:gap-y-0">
            <h1 className="font-sans text-3xl md:text-4xl antialiased font-thin tracking-wide text-center">Looks all right?</h1>
            <div className="w-full lg:h-full flex flex-col gap-y-4 justify-center items-center lg:mt-auto">
                <h3 className="font-sans antialiased font-thin text-xl tracking-wide leading-5 text-center">{ username }</h3>
                <div className="flex flex-col justify-start items-center">
                    <Avatar className='w-72 h-72 border border-slate-500 border-rounded' shape='circle' {...genConfig(config)} />
                </div>
            </div>
            <button 
                className="flex justify-center items-center px-3 py-3 rounded-md shadow-sm font-sans text-sm font-thin select-none bg-zinc-900 text-white"
                onClick={ handleSignUp }
            >
                Sign Me Up!
            </button>
        </div>
    )
}