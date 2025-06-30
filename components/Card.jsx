import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { InfoIcon } from './Icons';
import { useState } from 'react';

const Card = ({ props }) => {
  const {id, name, ki, image, race, description, transformations } = props;
  const [infoButtons, setInfoButtons] = useState({
    transformation: false,
    planet: false,
    description: false,
  });

  

  const handleButtons = (e) => {
    
    if(e === "description") setInfoButtons((prev) => ({...prev, description: !prev.description}))
    
  };

  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{ uri: image }} />

      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.race}>{race}</Text>
        {ki !== undefined && (
          <Text style={styles.ki}>🔋 Ki: {ki}</Text>
        )}
      </View>

      <View style={styles.infoButtonsContainer}>
        {description && (
          <Pressable onPress={() => handleButtons("description")} style={styles.infoButtons}>
            {({ pressed }) => (
              <InfoIcon style={{ opacity: pressed ? 0.4 : 1 }} />
            )}
          </Pressable>
        )}
        
        {description && (
          <Pressable onPress={() => handleButtons("description")} style={styles.infoButtons}>
            {({ pressed }) => (
              <InfoIcon style={{ opacity: pressed ? 0.4 : 1 }} />
            )}
          </Pressable>
        )}

        {description && (
          <Pressable onPress={() => handleButtons("description")} style={styles.infoButtons}>
            {({ pressed }) => (
              <InfoIcon style={{ opacity: pressed ? 0.4 : 1 }} />
            )}
          </Pressable>
        )}

      </View>

      {infoButtons.description && (
        <Text style={styles.description}>{description}</Text>
      )}
    </View>
  );
};

export default Card;


const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff9c4',
    borderRadius: 20,
    padding: 16,
    marginVertical: 12,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 400,
    borderRadius: 12,
    marginBottom: 12,
    resizeMode: 'contain',
  },
  infoContainer: {

    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexWrap: "wrap",
  },
  name: {
    fontFamily: "Honk",
    fontSize: 50,
    color: '#212121',
  },
  ki: {
    fontSize: 16,
    color: '#4caf50',
  },
  race: {

  },
  infoButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  description: {
    fontFamily: "SaiyanSans",
    marginTop: 10,
    fontSize: 15,
    lineHeight: 20,
    color: '#424242',
    backgroundColor: '#fffde7',
    padding: 10,
    borderRadius: 8,
  },
});
