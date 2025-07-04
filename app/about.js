import { Pressable, StyleSheet, View, Text } from "react-native";
import { AboutIcon } from "../components/Icons";
import { Link } from "expo-router";

export default function About() {
    
    return(
        <View style ={styles.containerAbout}>
            <Link asChild href="/">
                <Pressable>
                    <AboutIcon />
                </Pressable>
            </Link>
            <Text>
                Freezer es un ser que conquista planetas para venderlos después a través de una organización[Nota 1]​ a la que pertenecen criaturas de distintas razas. Una de ellas es la de los saiyajin, seres con aspecto humano y poseedores de una considerable fuerza. Temeroso de que representen una amenaza para su dominio, Freezer decide usar sus poderes para aniquilarlos destruyendo su hogar, el planeta Vegeta.[17]​ Solo unos cuantos saiyajin sobreviven a la masacre, entre ellos Vegeta, Nappa y los hermanos Raditz y Kakarotto, a quienes prefiere dejar con vida para que sigan sirviendo a su propósito. Para asegurarse de que sigan teniéndole lealtad, les miente al decirles que la destrucción de su planeta se había debido al impacto de un meteorito.[18]​ Kakarotto, que todavía es un bebé, es enviado en una nave espacial a la Tierra, para que cuando crezca extermine a la humanidad y se apodere del planeta.
                La nave de Kakarotto llega a su destino y se impacta en algún sitio al que después llega un anciano llamado Son Gohan que descubre a Kakarotto en el interior del vehículo espacial. Aunque desconoce su origen, Gohan lo adopta como su propio nieto y lo bautiza como «Gokū». Poco después, por descuido el bebé cae desde un acantilado y se golpea la cabeza, lo cual le ocasiona una amnesia que le hace olvidar su origen saiyajin.[19]​ Gohan se hace cargo del pequeño hasta su muerte algunos años después, tras lo cual el niño queda desamparado. Poco después conoce a Bulma, una joven que busca las Dragon Balls, siete esferas mágicas que al reunirlas permiten llamar al dragón Shenlong, una criatura capaz de concederle cualquier deseo al responsable de juntar todas las esferas.[20]​ Gokū decide acompañar a Bulma en su búsqueda, donde ambos conocen a otros personajes como Oolong, Yamcha y Puar, así como al villano Pilaf que también quiere las Dragon Balls para «conquistar el mundo». Para mejorar sus habilidades de combate y participar en un torneo de artes marciales denominado Tenkaichi Budōkai, el protagonista entrena con Kame Sennin, un anciano maestro de artes marciales que le enseña varias técnicas, entre las cuales destaca el Kame Hame Ha. En su entrenamiento Gokū conoce a Krilin, otro alumno de Kame Sennin quien acompaña al saiyajin en otras varias aventuras y a Ten Shin Han.[21]​
                Conforme transcurre la serie, Gokū se enfrenta a otros antagonistas como el ejército Red Ribbon,[22]​ Tao Pai Pai[23]​ y Piccolo Daimaō,[24]​ y continúa su entrenamiento con otros maestros como Karin[25]​ y Kamisama, dios de la Tierra y creador de las Dragon Balls.[26]​ Se casa con Chi-Chi,[27]​ con quien tiene dos hijos: Gohan[28]​ y Goten.[29]​ No es sino hasta la aparición en la Tierra de los otros guerreros saiyajin, y del propio Freezer, que Gokū se entera de su pasado. En su afán por proteger a la humanidad se enfrenta a estos y los derrota. Este mismo ideal lo lleva a combatir luego a otros enemigos, entre los cuales sobresalen el androide Cell[30]​ y la criatura Majin Boo[31]​ Es ayudado por otros personajes como Piccolo, Vegeta o Trunks; obteniendo enseñanzas de seres espirituales como Kaiō Sama, que le instruye con las técnicas Genkidama y Kaiō Ken;[32]​ y Kaiō Shin del Este.[33]​ Tiempo después se entera de que existen otros seres poderosos que rigen el universo, como Bills, el dios de la destrucción,[34]​ así como otros tipos de Dragon Balls con mayor poder que las originales: las «Dragon Balls definitivas» —cuya ubicación le lleva a recorrer el espacio exterior junto con Trunks, su nieta Pan y el robot Giru, que les lleva a enfrentarse a un nuevo enemigo llamado Baby y a combatir a dragones perversos—[35]​[36]​[37]​ y las «Super Dragon Ball» que poseen cada una el tamaño de un planeta.[38]​ Al final de Dragon Ball GT, debido a que las Dragon Balls originales acumulan un alto nivel de «energía negativa» en su interior, debido a su uso constante en la Tierra, Gokū parte sin rumbo junto con Shenlong para mantener equilibrada la energía de las esferas. Su cuerpo se desvanece al mismo tiempo que desaparecen las Dragon Balls.[39]​
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerAbout: {
        
    }
})