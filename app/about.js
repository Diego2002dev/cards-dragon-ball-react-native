import { Pressable, StyleSheet, View, Text } from "react-native";
import { AboutIcon, LinkIcon } from "../components/Icons";
import { Link } from "expo-router";
import colors from "../assets/styles/colors";
import { ScrollView } from "react-native-web";

export default function About() {
    
    return(
        <>
            <LinkIcon link="/" />
            <View style ={styles.aboutContainer}>
                <Text style ={styles.aboutText}>
                Hello! My name is Diego Jimenez, and I am a developer specialized in JavaScript and React Native applications
                {"\n"}
                This is my first React Native project, it is a simple mobile app inspired by the Dragon Ball universe. Its main purpose is to display data from the Dragon Ball API in a clear and accessible way. I have built this project using modern JavaScript practices. The app covers essential concepts of mobile development, including navigation, contexts, custom components, data fetching, and styling. My goal was to make it simple yet functional, I truly enjoy working on these kinds of projects and I look forward to improving my applications day by day.
                </Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    aboutContainer: {
        backgroundColor: colors.backgroundCard,
        width: "80%",
        alignSelf: "center",
        marginTop: 60,
        borderRadius: 8,
    },
    aboutText: {
        fontFamily: "Knewave-Regular",
        fontSize: 12,
        padding: 10,
        color: colors.descriptions,
        fontSize: 17,
    }

})