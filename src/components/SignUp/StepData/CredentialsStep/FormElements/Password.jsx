import { useDispatch, useSelector } from "react-redux";
import { SignUpActions } from "../../../../../store/slices/signUp/SignUpSlice";

export function Password(props) {
    // create a dispatch function
    const dispatch = useDispatch();

    // state getters
    const password = useSelector((state) => state.SignUp.password);
    const passwordCopy = useSelector((state) => state.SignUp.passwordCopy);
    const passwordMessage = useSelector((state) => state.SignUp.passwordMessage);
    const passwordInputType = useSelector((state) => state.SignUp.passwordInputType);

    // state setters
    const updatePassword = (password) => dispatch(SignUpActions.updatePassword({password}));
    const setPasswordMessageDefault = () => dispatch(SignUpActions.setPasswordMessageDefault());
    const setPasswordMessageErrorWeak = () => dispatch(SignUpActions.setPasswordMessageErrorWeak());
    const setPasswordMessageApprovedMedium = () => dispatch(SignUpActions.setPasswordMessageApprovedMedium());
    const setPasswordMessageApprovedStrong = () => dispatch(SignUpActions.setPasswordMessageApprovedStrong());
    const setPasswordCopyMessageDefault = () => dispatch(SignUpActions.setPasswordCopyMessageDefault());
    const setPasswordCopyMessageErrorMatch = () => dispatch(SignUpActions.setPasswordCopyMessageErrorMatch());
    const setPasswordCopyMessageApproved = () => dispatch(SignUpActions.setPasswordCopyMessageApproved());
    const showPassword = () => dispatch(SignUpActions.showPassword());
    const hidePassword = () => dispatch(SignUpActions.hidePassword());

    // handlers
    const handleSetMessage = (password) => {
        const check = checkPassword(password);

        switch(check) {
            case 'ErrorWeak':
                return setPasswordMessageErrorWeak();
            case 'ApprovedMedium':
                return setPasswordMessageApprovedMedium();
            case 'ApprovedStrong':
                return setPasswordMessageApprovedStrong();
            default:
                return setPasswordMessageDefault();
        };
    }
    const handleSetCopyMessage = (password) => {
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
    const handleUpdatePassword = (event) => { updatePassword(event.target.value); handleSetMessage(event.target.value); handleSetCopyMessage(event.target.value); }
    const togglePasswordVisability = () => passwordInputType === 'password' ? showPassword() : hidePassword();

    // utils
    const checkPassword = (password) => {
        const strongCheck = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
        const mediumCheck = /((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))/;

        if(password.length === 0) return null;

        if(strongCheck.test(password)) {
            return 'ApprovedStrong';
        } 
        if(mediumCheck.test(password)) {
            return 'ApprovedMedium';
        } 
        
        return 'ErrorWeak';
    }
    const checkPasswordsMatch = (password, passwordCopy) => {
        if(password.length === 0 || passwordCopy.length === 0) return null;
        if(password === passwordCopy) return 'Match';
        if(password !== passwordCopy) return "Don'tMatch";
    }

    return (
        <label className='w-full md:w-4/6 flex flex-col gap-y-1 text-md md:text-xs text-start font-thin lg:font-thin tracking-wide lg:tracking-normal text-gray-900'>
            Password
            <div className="flex justify-start items-center gap-x-5 rounded-md border border-slate-200 bg-slate-100 px-4 py-2">
                <input
                    value={ password }
                    onInput={ handleUpdatePassword }
                    type={ passwordInputType }
                    name="password"
                    className='w-full block text-start bg-transparent focus:outline-none text-2xl lg:text-xl font-sans antialiased font-thin'
                    placeholder='...' 
                />
                <span className="text-xs font-thin text-gray-900 hover:cursor-pointer" onClick={togglePasswordVisability}>{ passwordInputType === 'password' ? 'show' : 'hide' }</span>
            </div>
            <span 
                className={ passwordMessage === '6 symbols or more' ? "text-xs w-full text-end font-thin text-zinc-300" : passwordMessage === 'password too weak!' ? "text-xs w-full text-end font-thin text-red-800" : passwordMessage === 'medium password!' ? "text-xs w-full text-end font-thin text-yellow-800" : "text-xs w-full text-end font-thin text-green-800"}
            >
                { passwordMessage }
            </span>
        </label>
    )
}