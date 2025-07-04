import { useState, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator, FlatList } from 'react-native';
import Card from './Card';
import {useFetchData} from '../hooks/useFetchData';
import instanceAxios from "../api/instanceAxios";


export default function Main() {

  const data = useFetchData(instanceAxios, "characters/");

  const [cards, setCards] = useState([]);
  
  useEffect (() => {
    if(data) {
      setCards(data);
    }
  }, [data]);

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
    zIndex: 1,
  },
});