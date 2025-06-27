import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { InfoIcon } from './Icons';
import { useState } from 'react';

const Personaje = ({props}) => {

    const {name, ki, image, description} = props;

    const [descriptionButtom, setDescriptionButtom] = useState(false);

    const handleBoton = () => {
        setDescriptionButtom(!descriptionButtom);
    }

    return(
        <View style={styles.personajeContainer}>
            <Text>{name}</Text>
            {ki !== "unknown" && ki !== undefined && <Text>Ki: {ki}</Text>}
            
            <Image
                style={styles.image}
                source={{uri: image}}
            />

            {description !== undefined && 
            <Pressable onPress={handleBoton}>
               {({pressed}) => <InfoIcon style={{opacity: pressed ? 0.35 : 1}} />}
            </Pressable>
            }
            
            {descriptionButtom && <Text>{description}</Text>}

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