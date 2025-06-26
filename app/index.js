import { Pressable } from "react-native";
import Main from "../Components/Main";
import { InfoIcon } from "../Components/Icons";
import { Link } from "expo-router";

export default function Index() {

    return(
        <>
            <Link asChild href="/about">
            <Pressable>
                <InfoIcon />
            </Pressable>
            </Link>
            <Main />
        </>
    )
}