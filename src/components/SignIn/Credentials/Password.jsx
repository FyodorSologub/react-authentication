import { useDispatch, useSelector } from "react-redux";
import { SignInActions } from "../../../store/slices/signIn/SignInSlice";

export function Password() {
    // create a dispatch function
    const dispatch = useDispatch();

    // state getters
    const password = useSelector((state) => state.SignIn.password);
    const passwordInputType = useSelector((state) => state.SignIn.passwordInputType);

    // state setters
    const updatePassword = (password) => dispatch(SignInActions.updatePassword({password}));
    const setPasswordCheckToTrue = () => dispatch(SignInActions.setPasswordCheckToTrue());
    const setPasswordCheckToFalse = () => dispatch(SignInActions.setPasswordCheckToFalse());
    const showPassword = () => dispatch(SignInActions.showPassword());
    const hidePassword = () => dispatch(SignInActions.hidePassword());

    // handlers
    const handleUpdatePassword = (event) => {
        updatePassword(event.target.value);
        checkPassword(event.target.value) ? setPasswordCheckToTrue() : setPasswordCheckToFalse();
    };
    const togglePasswordVisability = () => passwordInputType === 'password' ? showPassword() : hidePassword();

    // utils
    const checkPassword = (password) => password.length >= 6;

    return (
        <label className='w-full md:w-4/6 flex flex-col gap-y-1 text-2xl lg:text-xs text-start font-thin lg:font-thin tracking-wide lg:tracking-normal text-gray-900'>
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
                <span 
                    className="text-xs font-thin text-gray-900 hover:cursor-pointer" 
                    onClick={togglePasswordVisability}
                >
                    { passwordInputType === 'password' ? 'show' : 'hide' }
                </span>
            </div>
            <span className='text-xs w-full text-end font-thin text-zinc-300'>restore password</span>
        </label>
    )
}