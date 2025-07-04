import Ionicons from '@expo/vector-icons/Ionicons';
import Zocial from '@expo/vector-icons/Zocial';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

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
    <FontAwesome5 name="external-link-alt" size={24} {...props} />
 )

