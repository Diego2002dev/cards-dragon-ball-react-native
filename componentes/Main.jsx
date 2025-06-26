import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-web';
import Personaje from './Personaje';
import {useExtraerDatos} from '../hooks/useExtraerDatos';
import instanciaAxios from '../api/instanciaAxios';

export default function Main() {

  const datos = useExtraerDatos(instanciaAxios, "characters?limit=78");
  const datosTransforms = useExtraerDatos(instanciaAxios, "transformations");
  const planets = useExtraerDatos(instanciaAxios, "planets?limit=25");

  const [personajes, setPersonajes] = useState([]);
  
  useEffect (() => {
    if(datos && datosTransforms) {
      const fusion = [...planets, ...datos, ...datosTransforms];
      setPersonajes(fusion);
    }
  }, [datos]);

  return (
    <ScrollView style={styles.container}>
    <StatusBar style="auto" />

        {personajes.map((personaje) => (
          <Personaje key={`${personaje.id}${personaje.name}`} props={personaje}/>
        ))}

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
  },

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
//
// Los Hooks siempre empiezan por "use..."
// Las funciones que solo se vayan a usar en el useEffect es mejor que se metan en el propio useEffect