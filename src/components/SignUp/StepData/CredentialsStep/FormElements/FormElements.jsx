import { Username } from "./Username";
import { Password } from "./Password";
import { PasswordCopy } from "./PasswordCopy";

export const FormElements = () =>          
    <form className='w-full h-full flex flex-col justify-center items-center align-middle gap-y-6 md:gap-y-6'>
        <Username />
        <Password />
        <PasswordCopy />
    </form>