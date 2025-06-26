import { Pressable } from "react-native";
import Main from "../componentes/Main";
import { InfoIcon } from "../componentes/Icons";
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