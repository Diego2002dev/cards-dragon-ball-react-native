import { Pressable } from "react-native";
import Main from "../components/Main";
import { InfoIcon } from "../components/Icons";
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