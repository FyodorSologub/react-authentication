import { useDispatch } from "react-redux";
import { SignUpActions } from "../../../../store/slices/signUp/SignUpSlice";

export function MobileSettings() {
    // create a dispatch function
    const dispatch = useDispatch();

    // state setters
    const mobileToggleBlocks = () => dispatch(SignUpActions.mobileToggleBlocks());
        
    // handlers
    const handleClick = () => mobileToggleBlocks();

    return (
        <button onClick={ handleClick } className="h-5 w-5 absolute top-[7.25%] left-[15%] block md:hidden">
            <img src="https://img.icons8.com/fluency-systems-regular/48/settings--v1.png" alt="settings--v1"/>
        </button>
    )
}