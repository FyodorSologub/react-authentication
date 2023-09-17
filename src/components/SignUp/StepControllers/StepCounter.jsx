import { useDispatch, useSelector } from "react-redux";
import { SignUpActions } from "../../../store/slices/signUp/SignUpSlice";

export function StepCounter() {
    // create a dispatch function
    const dispatch = useDispatch();

    // state getters
    const step = useSelector((state) => state.SignUp.step);

    // state setters

    // handlers

    // utils
    const getStepMarkup = (condition) => `flex justify-center items-center w-8 w-14 md:w-12 lg:w-12 h-4 md:h-4 lg:h-5 lg:h-3 rounded-md shadow-sm font-sans text-sm lg:text-xs font-thin select-none ${condition ? 'bg-zinc-900 text-white' : 'bg-zinc-50 text-zinc-900'}`;

    return (
        <div className="absolute top-full start-0 mt-7 w-full flex justify-center">
            <div className='flex gap-x-2 justify-center align-middle items-center'>
                {
                    [1, 2, 3, 4].map((num, i) => <div key={i} className={ getStepMarkup(num <= step) }>{ num }</div>)
                }
            </div>
        </div>
    )
}