import { Pressable, StyleSheet, View } from "react-native";
import Main from "../components/Main";
import { AboutIcon, LinkIcon } from "../components/Icons";
import { Link } from "expo-router";
import colors from "../assets/styles/colors";


export default function Index() {

    return(
        <>
            <LinkIcon link="/about" />
            <Main />
        </>
    )
}
