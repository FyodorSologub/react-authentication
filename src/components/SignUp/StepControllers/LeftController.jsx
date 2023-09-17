import { useDispatch, useSelector } from "react-redux";
import { SignUpActions } from "../../../store/slices/signUp/SignUpSlice";

export function LeftController() {
    // create a dispatch function
    const dispatch = useDispatch();

    // state getters
    const step = useSelector((state) => state.SignUp.step);
    const stepMin = useSelector((state) => state.SignUp.stepMin);

    // state setters
    const goStepBack = () => dispatch(SignUpActions.goStepBack());

    // handlers
    const handleGoStepBack = () => {
        switch(checkAbilityToGoBack()) {
            case true:
                return goStepBack();
            default:
                return null;
        };
    }

    // utils
    const checkAbilityToGoBack = () => step > 1;

    return (
        <button onClick={handleGoStepBack}>
            <svg 
                className={ checkAbilityToGoBack() ? 'absolute top-1/2 right-full scale-150 mr-4 h-5 w-5 text-slate-600 font-thin leading-5 rotate-90 hover:cursor-pointer' : 'absolute top-1/2 right-full scale-150 mr-4 h-5 w-5 text-slate-400 opacity-70 font-thin leading-5 rotate-90 hover:cursor-pointer' } 
            >
                <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
            </svg>
        </button>
    )
}