import { useDispatch, useSelector } from "react-redux";

// components
import { GreetingsStep } from "./GreetingsStep/GteetingsStep";
import { CredentialsStep } from "./CredentialsStep/CredentialsStep";
import { AvatarStep } from "./AvatarStep/AvatarStep";
import { SumUpStep } from "./SumUpStep/SumUpStep";

export function StepData() {
    // create a dispatch function
    const dispatch = useDispatch();

    // state getters
    const step = useSelector((state) => state.SignUp.step);

    // state setters

    // handlers

    // utils

    return (
        <>
            { step === 1 && <GreetingsStep /> }
            { step === 2 && <CredentialsStep /> }
            { step === 3 && <AvatarStep /> }
            { step === 4 && <SumUpStep /> }
        </>
    )
}