import { useDispatch, useSelector } from "react-redux";
import { SignInActions } from "../../../store/slices/signIn/SignInSlice";

export function Username() {
    // create a dispatch function
    const dispatch = useDispatch();

    // state getters
    const username = useSelector((state) => state.SignIn.username);

    // state setters
    const updateUsername = (username) => dispatch(SignInActions.updateUsername({username}));
    const setUsernameCheckToTrue = () => dispatch(SignInActions.setUsernameCheckToTrue());
    const setUsernameCheckToFalse = () => dispatch(SignInActions.setUsernameCheckToFalse());

    // handlers
    const handleUpdateUsername = (event) => {
        updateUsername(event.target.value); 
        checkUsername(event.target.value) ? setUsernameCheckToTrue() : setUsernameCheckToFalse();
    };

    // utils
    const checkUsername = (username) => username.length >= 4 && username.length <= 12;

    return (
        <label className='w-full md:w-4/6 flex flex-col gap-y-1 text-md md:text-xs text-start font-thin lg:font-thin tracking-wide lg:tracking-normal text-gray-900'>
            Username
            <div className="w-full bg-slate-100 border border-slate-200 rounded-md">
                <input
                    value={ username }
                    onInput={ handleUpdateUsername }
                    type="text"
                    name="username"
                    className='block w-full text-start bg-transparent focus:outline-none px-4 py-2 bg-slate-100 text-2xl lg:text-xl font-sans font-thin'
                    placeholder='...' 
                />
            </div>
        </label>
    )
}