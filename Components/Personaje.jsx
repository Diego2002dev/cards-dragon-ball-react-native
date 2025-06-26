import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { InfoIcon } from './Icons';
import { useState } from 'react';

const Personaje = ({props}) => {

    const {name, ki, image, description} = props;

    const [boton, setBoton] = useState(false);

    const handleBoton = () => {
        setBoton(!boton);
    }

    return(
        <View style={styles.personajeContainer}>
            <Text>{name}</Text>
            {ki !== "unknown" && ki !== "0" && <Text>Ki: {ki}</Text>}
            
            <Image
                style={styles.image}
                source={{uri: image}}
            />

            {description !== undefined && 
            <Pressable onPress={handleBoton}>
                <InfoIcon />
            </Pressable>
            }
            
            {boton && <Text>{description}</Text>}

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