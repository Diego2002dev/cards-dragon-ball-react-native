import Ionicons from '@expo/vector-icons/Ionicons';
import Zocial from '@expo/vector-icons/Zocial';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { View, Pressable, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import colors from '../assets/styles/colors';

 export const InfoIcon = (props) => (
    <Entypo name="info-with-circle" size={35} {...props} />
 ) 

 export const PlanetIcon = (props) => (
   <Ionicons name="planet" size={35} {...props} />
 )

 export const TransformationsIcon = (props) => (
   <Zocial name="drupal" size={35} {...props} />
 )

export const AboutIcon = (props) => (
    <FontAwesome5 name="external-link-alt" {...props}/>
 )



export const LinkIcon = ({link}) => {
  return(
    <View style={styles.linkContainer}>
        <Link asChild href={link} >
            <Pressable style={styles.aboutPressable}>
                <AboutIcon size={25} />
            </Pressable>
        </Link>
    </View>
    )
}
const styles = StyleSheet.create({

    linkContainer: {
        position: "absolute",
        backgroundColor: colors.borders,
        zIndex: 3,
        borderRadius: 8,
        margin: 8,
    },
    aboutPressable: {
        width: 40,
        height: 40,
        padding: 0,
        alignItems: "center",
        justifyContent: "center",
        
    },
})