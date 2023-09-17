import { useSelector } from "react-redux";
import Avatar, { genConfig } from 'react-nice-avatar'

export function AvatarContainer() {
    // state getters
    const avatarConfig = useSelector((state) => state.SignUp.avatarConfig);

    return (
        <div className="w-3/5 h-full flex flex-col">
            <h1 className="font-sans text-2xl antialiased font-thin tracking-wide leading-5 text-center mt-6">Create your avatar!</h1>
            <div className="w-full h-full flex flex-col justify-center items-center">
                <Avatar className='w-72 h-72 border border-slate-500 border-rounded' shape='circle' {...genConfig(avatarConfig)} />
            </div>
        </div>
    )
}