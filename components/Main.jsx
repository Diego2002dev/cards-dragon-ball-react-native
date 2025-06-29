import { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, ActivityIndicator, FlatList } from 'react-native';
import Card from './Card';
import {useFetchData} from '../hooks/useFetchData';
import instanceAxios from "../api/instanceAxios";


export default function Main() {

  const data = useFetchData(instanceAxios, "characters?limit=78");
  const dataTransforms = useFetchData(instanceAxios, "transformations");
  const planets = useFetchData(instanceAxios, "planets?limit=20");

  const [cards, setCards] = useState([]);
  
  useEffect (() => {
    if(data.length && dataTransforms.length && planets.length) {
      const fusion = [...data, ...dataTransforms, ...planets];
      setCards(fusion);
    }
  }, [data, dataTransforms, planets]);

  return (
    <>
      {cards.length == 0 ? (
          <View style={styles.containerMain}>
              <ActivityIndicator size="large" color="black" />
          </View>
      ) : (
          <FlatList
            data = {cards}
            keyExtractor = {(card) => `${card.id}${card.name}`}
            renderItem = {({item}) => (
            <Card props={item}/>
            )}
          />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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