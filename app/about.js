import { Pressable, StyleSheet, View, Text } from "react-native";
import { AboutIcon, LinkIcon } from "../components/Icons";
import { Link } from "expo-router";
import colors from "../assets/styles/colors";

export default function About() {
    
    return(
        <>
            <LinkIcon link="/" />
            <View style ={styles.aboutContainer}>
                <Text style ={styles.aboutText}>
                    Freezer es un ser que conquista planetas para venderlos después a través de una organización[Nota 1]​ a la que pertenecen criaturas de distintas razas. Una de ellas es la de los saiyajin, seres con aspecto humano y poseedores de una considerable fuerza. Temeroso de que representen una amenaza para su dominio, Freezer decide usar sus poderes para aniquilarlos destruyendo su hogar, el planeta Vegeta.[17]​ Solo unos cuantos saiyajin sobreviven a la masacre, entre ellos Vegeta, Nappa y los hermanos Raditz y Kakarotto, a quienes prefiere dejar con vida para que sigan sirviendo a su propósito. Para asegurarse de que sigan teniéndole lealtad, les miente al decirles que la destrucción de su planeta se había debido al impacto de un meteorito.[18]​ Kakarotto, que todavía es un bebé, es enviado en una nave espacial a la Tierra, para que cuando crezca extermine a la humanidad y se apodere del planeta.
                    Al final de Dragon Ball GT, debido a que las Dragon Balls originales acumulan un alto nivel de «energía negativa» en su interior, debido a su uso constante en la Tierra, Gokū parte sin rumbo junto con Shenlong para mantener equilibrada la energía de las esferas. Su cuerpo se desvanece al mismo tiempo que desaparecen las Dragon Balls.[39]​
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
    }

})