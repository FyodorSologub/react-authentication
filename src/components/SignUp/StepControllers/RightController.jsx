import { useDispatch, useSelector } from "react-redux";
import { SignUpActions } from "../../../store/slices/signUp/SignUpSlice";

export function RightController() {
    // create a dispatch function
    const dispatch = useDispatch();

    // state getters
    const step = useSelector((state) => state.SignUp.step);
    const usernameMessage = useSelector((state) => state.SignUp.usernameMessage);
    const passwordMessage = useSelector((state) => state.SignUp.passwordMessage);
    const passwordCopyMessage = useSelector((state) => state.SignUp.passwordCopyMessage);

    // state setters
    const goStepForward = () => dispatch(SignUpActions.goStepForward());

    // handlers
    const handleGoStepForward = () => {
        const check = checkAbilityToGoForward();

        switch(check) {
            case true:
                return goStepForward();
            default:
                return null;
        }
    }

    // utils
    const checkAbilityToGoForward = () => {
        if(step >= 4) return false;

        const caseFirst = usernameMessage === "great username you've got!";
        const caseSecond = passwordMessage === 'strong password!' || passwordMessage === 'medium password!';
        const caseThird = passwordCopyMessage === 'passwords match';

        if(step >= 2) {
            if(!caseFirst || !caseSecond || !caseThird) return false;
        }

        return true;
    }

    return (
        <button onClick={handleGoStepForward}>
            <svg 
                className={ checkAbilityToGoForward() ? 'absolute top-1/2 left-full scale-150 ml-4 h-5 w-5 text-slate-600 font-thin leading-5 rotate-90 hover:cursor-pointer' : 'absolute top-1/2 left-full scale-150 ml-4 h-5 w-5 text-slate-400 opacity-70 font-thin leading-5 rotate-90 hover:cursor-pointer' } 
                style={ {rotate: '-180deg'} } 
            >
                <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
            </svg>
        </button>
    )
}

/**
 viewBox="0 0 20 20" 
                fill="currentColor" 
                aria-hidden="true"
 */