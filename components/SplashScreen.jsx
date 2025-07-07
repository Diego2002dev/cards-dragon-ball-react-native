import {StyleSheet, Image, View} from "react-native"
import logo from "../assets/images/logo_dragonballapi.webp"
import colors from "../assets/styles/colors"

export function SplashScreen() {


    return(
        <View style={styles.container}>
        
        <Image style={styles.logo} source={logo}/>
        </View>
    )
}

const styles = StyleSheet.create ({

    container: {
        backgroundColor: colors.borders,
        justifyContent: "center",
        height: "100%",
    },
    logo: {
        alignSelf: "center",
        resizeMode: 'contain',
        width: 340,
        height: 340,
    },

})