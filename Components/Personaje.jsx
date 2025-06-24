import { StyleSheet, Text, View, Image } from 'react-native';

const Personaje = ({props}) => {

    const {name, ki, image} = props;



    return(
        <View style={styles.personajeContainer}>
            <Text>{name}</Text>
            {ki !== "unknown" && ki !== "0" && <Text>Ki: {ki}</Text>}
            
            <Image
                style={styles.image}
                source={{uri: image}}
            />
        </View>
    )
}
export default Personaje;


const styles = StyleSheet.create({
    personajeContainer: {
        
        flexDirection: 'column',
        alignItems: 'center',
        borderWidth: 5,
        borderColor: 'yellow',
        borderRadius: 20,
        margin: 30,
    },
    image:{
        width: 250,
        height: 250,
        resizeMode: "contain",
        paddingBottom: 40,
    },
})