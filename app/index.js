import { Pressable, StyleSheet, View } from "react-native";
import Main from "../components/Main";
import { AboutIcon } from "../components/Icons";
import { Link } from "expo-router";


export default function Index() {

    return(
        <>
            <Link asChild href={"/about"} >
                <Pressable>
                    <AboutIcon />
                </Pressable>
            </Link>

            <Main />
        </>
    )
}