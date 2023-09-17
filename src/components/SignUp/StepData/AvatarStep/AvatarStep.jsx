import { AvatarOptions } from "./AvatarOptions";
import { AvatarContainer } from "./AvatarContainer";
import { MobileSettings } from "./MobileSettings";

export function AvatarStep() {
        return (
            <div className="w-full h-full sm:relative flex">
                <MobileSettings />
                <AvatarOptions />
                <AvatarContainer />
            </div>
        )
}