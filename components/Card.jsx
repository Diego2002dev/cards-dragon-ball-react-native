import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { InfoIcon, PlanetIcon, TransformationsIcon } from './Icons';
import { useState } from 'react';
import colors from "../assets/styles/colors";

const Card = ({ props }) => {

  const {id, name, ki, image, race, description, affiliation, transformations,
         originPlanet: planet } = props;

    const upperCaseName = name.toUpperCase();


  const [infoButtons, setInfoButtons] = useState({
    transformations: false,
    planet: false,
    description: false,
  });

  const handleButtons = (pressedButton) => {
    setInfoButtons((prev) => ({[pressedButton]: !prev[pressedButton]}));
  };

  return (
    <View style={styles.card}>
      <Text style={[styles.name]}>{upperCaseName}</Text>
      <Image style={styles.image} source={{ uri: image }} />

      <View style={styles.infoContainer}>
        <View style={styles.containerInfoContainer}><Text style={styles.race}>{race}</Text></View>
        <View style={styles.containerInfoContainer}><Text style={styles.race}>{affiliation}</Text></View>

        {ki !== undefined && (
        <View style={styles.containerInfoContainer}><Text style={styles.ki}>Ki: {ki}</Text></View>
        )}
      </View>



      <View style={styles.infoButtonsContainer}>
        
          <Pressable onPress={() => handleButtons("planet")} style={styles.infoButtons}>
            {({ pressed }) => (
              <PlanetIcon style={{
                opacity: pressed ? 1 : 1,
                color: infoButtons.planet ? colors.borders : colors.descriptions,
                
              }} />
            )}
          </Pressable>
        

        {transformations.length !== 0 && (
          <Pressable onPress={() => handleButtons("transformations")} style={styles.infoButtons}>
            {({ pressed }) => (
              <TransformationsIcon style={{
                opacity: pressed ? 1 : 1,
                color: infoButtons.transformations ? colors.borders : colors.descriptions,
              }} />
            )}
          </Pressable>
        )}

        {description && (
          <Pressable onPress={() => handleButtons("description")} style={styles.infoButtons}>
            {({ pressed }) => (
              <InfoIcon style={{
                opacity: pressed ? 1 : 1,
                color: infoButtons.description ? colors.borders : colors.descriptions,
                
              }} />
            )}
          </Pressable>
        )}
      </View>

      {infoButtons.planet && (
        <View style={styles.planetsContainer}>
          <Text style={styles.planetName}>{planet.name}</Text>
          <Image source={{uri:planet.image}} style={styles.planetImage} />
          <Text style={styles.planetDescription} >{planet.description}</Text>
        </View>
        )}

      {infoButtons.transformations && (
        transformations.map((transformation) => (
        <View style={styles.transformationsContainer} key={transformation.name}>
          <Text style={styles.transformationsName}>{transformation.name}</Text>
          <Image source={{uri: transformation.image}} style={styles.transformationsImage}/>
          <Text style={styles.transformationsKi}>Ki: {transformation.ki}</Text>
        </View>
        )) )}

      {infoButtons.description && (
        <Text style={styles.description}>{description}</Text>
        )}

    </View>
  );
};

export default Card;


const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.backgroundCard,
    borderRadius: 20,
    padding: 16,
    marginVertical: 25,
    marginHorizontal: 22,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 5,

    borderWidth: 3,
    borderColor: colors.borders, 
  },
  image: {
    width: '100%',
    height: 270,
    borderRadius: 8,
    marginTop: 8,
    marginBottom: 14,
    resizeMode: 'contain',
    backgroundColor: colors.innerCardBackground,
  },
  infoContainer: {
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'space-between', 
  },

  containerInfoContainer: {
    width: "100%",
    
    backgroundColor: colors.innerCardBackground,
    borderColor: colors.borders,

    borderBottomWidth: 4,
    borderRightWidth: 4,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },

  name: {
    fontFamily: "Honk",
    fontSize: 50,
    lineHeight: 40,
    textAlign: "right",

  },

  race: {
    fontFamily: "BungeeInline-Regular",
    fontSize: 18,
    color: colors.borders,
    lineHeight: 22,
  },
  
  ki: {
    fontFamily: "BungeeInline-Regular",
    fontSize: 16,
    lineHeight: 22,
    color: colors.borders,
  },


  infoButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    alignItems: "flex-end",
  },
  description: {
    fontFamily: "Knewave-Regular",
    marginTop: 10,
    fontSize: 15,
    lineHeight: 20,
    color: colors.descriptions,
    backgroundColor: colors.innerCardBackground,
    padding: 10,
    borderRadius: 8,
  },



  planetsContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: colors.innerCardBackground,
    padding: 16,
    borderRadius: 8,
    marginTop: 10,
  },
  planetName: {
    textAlign: "center",
    fontFamily: "BungeeInline-Regular",
    fontSize: 28,
    color: colors.borders,
    marginTop: "-20",
  },
  planetImage: {
    width: "95%",
    height: 220,
    resizeMode: "cover",
    borderWidth: 3,
    borderColor: colors.borders,
    borderRadius: 8,
    alignSelf: "center",
    marginBottom: "-5",
    zIndex: 1,
  },
  planetDescription: {
    width: "95%",
    alignSelf: "center",
    fontSize: 15,
    fontFamily: "Knewave-Regular",
    lineHeight: 20,
    backgroundColor: colors.backgroundCard,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    padding: 10,
    color: colors.descriptions,
  },

  transformationsContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: colors.innerCardBackground,
    padding: 16,
    borderRadius: 8,
    marginTop: 10,
  },
  transformationsName: {
    textAlign: "center",
    fontFamily: "BungeeInline-Regular",
    fontSize: 28,
    color: colors.borders,
    marginTop: "-20",
  },
  transformationsImage: {
    width: "95%",
    height: 250,
    resizeMode: "contain",
    backgroundColor: colors.backgroundCard,
    borderRadius: 8,
    alignSelf: "center",
    marginBottom: "-5",
    zIndex: 1,
  },
  transformationsKi: {
    width: "95%",
    alignSelf: "center",
    fontSize: 15,
    fontFamily: "BungeeInline-Regular",
    lineHeight: 20,
    backgroundColor: colors.backgroundCard,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    padding: 10,
    color: colors.borders,
  }
});