import { useDispatch, useSelector } from "react-redux";
import { SignUpActions } from "../../../../../store/slices/signUp/SignUpSlice";

export function Username() {
    // create a dispatch function
    const dispatch = useDispatch();

    // state getters
    const username = useSelector((state) => state.SignUp.username);
    const usernameMessage = useSelector((state) => state.SignUp.usernameMessage);

    // state setters
    const updateUsername = (username) => dispatch(SignUpActions.updateUsername({username}));
    const setUsernameMessageDefault = () => dispatch(SignUpActions.setUsernameMessageDefault());
    const setUsernameMessageErrorShort = () => dispatch(SignUpActions.setUsernameMessageErrorShort());
    const setUsernameMessageErrorLong = () => dispatch(SignUpActions.setUsernameMessageErrorLong());
    const setUsernameMessageErrorSymbols = () => dispatch(SignUpActions.setUsernameMessageErrorSymbols());
    const setUsernameMessageApproved = () => dispatch(SignUpActions.setUsernameMessageApproved());

    // handlers
    const handleSetMessage = (username) => {
        switch(checkUsername(username)) {
            case 'ErrorShort':
                return setUsernameMessageErrorShort();
            case 'ErrorLong':
                return setUsernameMessageErrorLong();
            case 'ErrorSymbols':
                return setUsernameMessageErrorSymbols();
            case 'Approved':
                return setUsernameMessageApproved();
            default:
                return setUsernameMessageDefault();
        };
    }
    const handleUpdateUsername = (event) => { updateUsername(event.target.value); handleSetMessage(event.target.value); }

    // utils
    const checkUsername = (username) => {
        const usernameRegex = /^[a-zA-Z0-9]+$/;

        if(username.length === 0) return null;
        if(username.length < 5) return 'ErrorShort';
        if(username.length > 15) return 'ErrorLong'
        if(!usernameRegex.test(username)) return 'ErrorSymbols'
        if(usernameRegex.test(username)) return 'Approved'
    }

    return (
        <label className='w-full md:w-4/6 flex flex-col gap-y-1 text-md md:text-xs text-start font-thin lg:font-thin tracking-wide lg:tracking-normal text-gray-900'>
            Username
            <div className="w-full border border-slate-200 bg-slate-100 rounded-md">
                <input
                    value={ username }
                    onInput={ handleUpdateUsername }
                    type="text"
                    name="username"
                    className='block text-start bg-transparent focus:outline-none px-4 py-2 text-2xl lg:text-xl font-sans font-thin'
                    placeholder='...' 
                />
            </div>
            <span 
                className={ usernameMessage === 'between 5 and 15 symbols' ? "text-xs w-full text-end font-thin text-zinc-300" : usernameMessage === "great username you've got!" ? 'text-xs w-full text-end font-thin text-green-800' : 'text-xs w-full text-end font-thin text-red-800' }
            >
                { usernameMessage }
            </span>
        </label>
    )
}