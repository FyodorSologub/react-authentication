import { AvatarOptions } from "./AvatarOptions";
import { AvatarContainer } from "./AvatarContainer";

export function AvatarStep() {
        return (
            <div className="w-full h-full flex">
                <AvatarOptions />
                <AvatarContainer />
            </div>
        )
}