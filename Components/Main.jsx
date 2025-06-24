import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import axios from "axios";
import { ScrollView } from 'react-native-web';
import Personaje from './Personaje';

export default function Main() {


  const [personajes, setPersonajes] = useState([]);
  const extraerPersonajes = async () => {
    await axios.get("https://dragonball-api.com/api/characters?limit=78")
    .then(response => {
      setPersonajes(response.data.items);
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    })
  }

  useEffect(() => {
    extraerPersonajes();
  }, [])

  return (
    <ScrollView style={{flex: 1}}>
      
      <View style={styles.container}>
          
        {personajes.map((personaje) => (
          <Personaje key={personaje.id} props={personaje}/>
        ))}

      </View>

    <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',  
  },

  
  personajeContainer: {
    flex: 1,
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
    backgroundColor: "black",
  }

});



// MANERAS DE DECLARAR COMPONENTES:

// export default function Componente(){}  <== Componentes principales
// 
//
// const Componente = () => {}  <== Componente auxiliar  *SE EXPORTA AL FINAL*  => export default Saludo;
//
//
//
//
// (FINAL) export default Saludo;  => A LA HORA DE IMPORTARLO =>  import Saludo from './Saludo';
//
// (INICIO) export const Saludo = ...;  => A LA HORA DE IMPORTARLO =>  import { Saludo } from './Saludo';
//
// 