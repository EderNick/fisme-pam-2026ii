import { nowPlayingAction } from "@/services/actions/now_playing.action";
import { Slot } from "expo-router";

const RootLayout = () => {

    nowPlayingAction();

    return (
        <Slot />
    )
}

export default RootLayout