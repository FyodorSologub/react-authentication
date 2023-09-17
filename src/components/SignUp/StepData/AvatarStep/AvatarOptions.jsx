import { useDispatch, useSelector } from "react-redux";
import { SignUpActions } from "../../../../store/slices/signUp/SignUpSlice";

// components
import { DropDown } from "./DropDown";

export function AvatarOptions() {
    // create a dispatch function
    const dispatch = useDispatch();

    // state getters
    const avatarConfigOptions = useSelector((state) => state.SignUp.avatarConfigOptions);
    const avatarConfig = useSelector((state) => state.SignUp.avatarConfig);

    // state setters
    const updateAvatarConfig = (key, value) => dispatch(SignUpActions.updateAvatarConfig({ key, value }));
        
    // handlers
    const handleUpdateAvatarConfig = (key, value) => updateAvatarConfig(key, value);   

    // utils

    return (
        <div className="w-2/5 h-full flex flex-col bg-slate-100 rounded-md px-4 py-6 gap-y-6 overflow-y-hidden overflow-x-hidden">
            <h2 className="font-sans antialiased font-thin tracking-wide leading-5 text-center">Preferences</h2>
            <div className="w-full h-full overflow-y-auto" style={{ 'msOverflowStyle': 'none',  "scrollbarWidth": "none" }}>
                <ul className="flex flex-col w-full h-full gap-y-4 pt-4 px-4 list-inside list-disc hover:list-disc">
                    { Object.keys(avatarConfigOptions).map((key, i) => <DropDown key={i} options={ avatarConfigOptions[key] } config={ avatarConfig } Objkey={ key } handler={ handleUpdateAvatarConfig } />) }
                </ul>
            </div>
        </div>
    )
}