import { useSelector } from "react-redux";
import Avatar, { genConfig } from 'react-nice-avatar'

export function AvatarContainer() {
    // state getters
    const avatarConfig = useSelector((state) => state.SignUp.avatarConfig);
    const mobileShowSettings = useSelector((state) => state.SignUp.mobileShowSettings);

    return (
        <div className={ mobileShowSettings === false ? "w-full md:w-3/5 h-full flex flex-col justify-center md:justify-start items-center gap-y-5 md:gap-y-0" : 'w-full md:w-3/5 h-full hidden md:flex flex-col' }>
            <h1 className="font-sans text-2xl antialiased font-thin tracking-wide leading-5 text-center mt-[1.4rem] md:mt-6">Create your avatar!</h1>
            <div className="w-full md:h-full flex flex-col justify-center items-center">
                <Avatar className='w-72 h-72 border border-slate-500 border-rounded' shape='circle' {...genConfig(avatarConfig)} />
            </div>
        </div>
    )
}