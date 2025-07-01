import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { InfoIcon, PlanetIcon, TransformationsIcon } from './Icons';
import { useState } from 'react';

const Card = ({ props }) => {

  const {id, name, ki, image, race, description, gender, affiliation, transformations, planets } = props;

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
        <View style={styles.containerInfoContainer}><Text style={styles.gender}>{race}</Text></View>
        <View style={styles.containerInfoContainer}><Text style={styles.race}>{affiliation}</Text></View>

        {ki !== undefined && (
        <View style={styles.containerInfoContainer}><Text style={styles.ki}>🔋 Ki: {ki}</Text></View>
        )}
      </View>

      <View style={styles.infoButtonsContainer}>
        {description && (
          <Pressable onPress={() => handleButtons("planet")} style={styles.infoButtons}>
            {({ pressed }) => (
              <PlanetIcon style={{
                opacity: pressed ? 1 : 1,
                color: infoButtons.planet ? "orange" : "",
              }} />
            )}
          </Pressable>
        )}

        {description && (
          <Pressable onPress={() => handleButtons("transformations")} style={styles.infoButtons}>
            {({ pressed }) => (
              <TransformationsIcon style={{
                opacity: pressed ? 1 : 1,
                color: infoButtons.transformations ? "orange" : "",
              }} />
            )}
          </Pressable>
        )}

        {description && (
          <Pressable onPress={() => handleButtons("description")} style={styles.infoButtons}>
            {({ pressed }) => (
              <InfoIcon style={{
                opacity: pressed ? 1 : 1,
                color: infoButtons.description ? "orange" : "",
              }} />
            )}
          </Pressable>
        )}

      </View>

      {infoButtons.planet && (
              <Text style={styles.planet}>PLANET</Text>
            )}

      {infoButtons.transformations && (
        <Text style={styles.transformations}>TRANSFORMATIONS</Text>
            )}

      {infoButtons.description && (
        <Text style={styles.description}>{description}</Text>
      )}

    </View>
  );
};

export default Card;


const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgb(255, 240,150)',
    borderRadius: 20,
    padding: 16,
    marginVertical: 12,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 5,

    borderWidth: 3,
    borderColor: 'orange', 
  },
  image: {
    width: '100%',
    height: 285,
    borderRadius: 8,
    marginTop: 8,
    marginBottom: 8,
    resizeMode: 'contain',
    backgroundColor: "#fffde7",

  },
  infoContainer: {
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'space-between', 
  },

  containerInfoContainer: {
    width: "100%",
    
    backgroundColor: "#fffde7",
    borderColor: "orange",

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

  gender: {
    fontFamily: "BungeeInline-Regular",
    fontSize: 22,
    color: "orange",
    lineHeight: 22,
  },

  race: {
    fontFamily: "BungeeInline-Regular",
    fontSize: 22,
    color: "orange",
    lineHeight: 22,
  },
  
  ki: {
    fontFamily: "BungeeInline-Regular",
    fontSize: 20,
    lineHeight: 22,
  },
  


  infoButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  description: {
    fontFamily: "Knewave-Regular",
    marginTop: 10,
    fontSize: 15,
    lineHeight: 20,
    color: 'rgba(0, 0, 0, 0.8)',
    backgroundColor: '#fffde7',
    padding: 10,
    borderRadius: 8,
  },
});