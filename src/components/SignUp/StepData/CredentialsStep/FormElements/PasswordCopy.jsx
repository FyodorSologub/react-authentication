import { useDispatch, useSelector } from "react-redux";
import { SignUpActions } from "../../../../../store/slices/signUp/SignUpSlice";

export function PasswordCopy(props) {
    // create a dispatch function
    const dispatch = useDispatch();

    // state getters
    const password = useSelector((state) => state.SignUp.password);
    const passwordCopy = useSelector((state) => state.SignUp.passwordCopy);
    const passwordCopyMessage = useSelector((state) => state.SignUp.passwordCopyMessage);
    const passwordCopyInputType = useSelector((state) => state.SignUp.passwordCopyInputType);

    // state setters
    const updatePasswordCopy = (passwordCopy) => dispatch(SignUpActions.updatePasswordCopy({passwordCopy}));
    
    const setPasswordCopyMessageDefault = () => dispatch(SignUpActions.setPasswordCopyMessageDefault());
    const setPasswordCopyMessageErrorMatch = () => dispatch(SignUpActions.setPasswordCopyMessageErrorMatch());
    const setPasswordCopyMessageApproved = () => dispatch(SignUpActions.setPasswordCopyMessageApproved());
    const showPasswordCopy = () => dispatch(SignUpActions.showPasswordCopy());
    const hidePasswordCopy = () => dispatch(SignUpActions.hidePasswordCopy());

    // handlers
    const handleSetMessage = (passwordCopy) => {
        const check = checkPasswordsMatch(password, passwordCopy);

        switch(check) {
            case 'Match':
                return setPasswordCopyMessageApproved();
            case "Don'tMatch":
                return setPasswordCopyMessageErrorMatch();
            default:
                return setPasswordCopyMessageDefault();
        };
    }
    const handleUpdatePasswordCopy = (event) => { updatePasswordCopy(event.target.value); handleSetMessage(event.target.value); }
    const togglePasswordCopyVisability = () => passwordCopyInputType === 'password' ? showPasswordCopy() : hidePasswordCopy();

    // utils
    const checkPasswordsMatch = (password, passwordCopy) => {
        if(password.length === 0 || passwordCopy.length === 0) return null;
        if(password === passwordCopy) return 'Match';
        if(password !== passwordCopy) return "Don'tMatch";
    }

    return (
        <label className='w-full md:w-4/6 flex flex-col gap-y-1 text-2xl lg:text-xs text-start font-thin lg:font-thin tracking-wide lg:tracking-normal text-gray-900'>
            Confirm password
            <div className="flex justify-start items-center gap-x-5 rounded-md border border-slate-200 bg-slate-100 px-4 py-2">
                <input
                    value={ passwordCopy }
                    onInput={ handleUpdatePasswordCopy }
                    type={ passwordCopyInputType }
                    name="passwordCopy"
                    className='w-full block text-start bg-transparent focus:outline-none text-2xl lg:text-xl font-sans antialiased font-thin'
                    placeholder='...' 
                />
                <span className="text-xs font-thin text-gray-900 hover:cursor-pointer" onClick={togglePasswordCopyVisability}>{ passwordCopyInputType === 'password' ? 'show' : 'hide' }</span>
            </div>
            <span 
                className={ passwordCopyMessage === '6 symbols or more' ? "text-xs w-full text-end font-thin text-zinc-300" : passwordCopyMessage === "passwords don't match!" ? "text-xs w-full text-end font-thin text-red-800" : "text-xs w-full text-end font-thin text-green-800" }
            >
                { passwordCopyMessage }
            </span>
        </label>
    )
}