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
    const getStepMarkup = (condition) => `flex justify-center items-center w-8 w-14 md:w-12 lg:w-12 h-5 md:h-5 lg:h-5 lg:h-3 rounded-md shadow-sm font-sans text-sm lg:text-xs font-thin select-none ${condition ? 'bg-zinc-900 text-white border border-zinc-900 md:border-0' : 'bg-zinc-50 text-zinc-900 border border-zinc-900 md:border-0'}`;

    return (
        <div className="absolute top-[95%] md:top-full start-0 md:mt-7 w-full flex justify-center">
            <div className='flex gap-x-2 justify-center align-middle items-center'>
                {
                    [1, 2, 3, 4].map((num, i) => <div key={i} className={ getStepMarkup(num <= step) }>{ num }</div>)
                }
            </div>
        </div>
    )
}