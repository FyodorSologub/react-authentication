import { useDispatch, useSelector } from "react-redux";

// components
import { LeftController } from "./StepControllers/LeftController";
import { RightController } from "./StepControllers/RightController";
import { StepCounter } from "./StepControllers/StepCounter";
import { StepData } from "./StepData/StepData";

export function SignUp() {
    // create a dispatch function
    const dispatch = useDispatch();

    // state getters
    const step = useSelector((state) => state.SignUp.step);
    const stepMin = useSelector((state) => state.SignUp.stepMin);

    // state setters

    // handlers

    // utils

    return (
        <div className="relative flex flex-col w-full h-full md:w-5/6 md:h-5/6 lg:w-3/6 lg:h-4/6 bg-slate-50 shadow-lg rounded-lg lg:rounded-md p-10 md:p-10">
            <LeftController />
            <RightController />
            <StepData />
            <StepCounter />
        </div>
    )
}