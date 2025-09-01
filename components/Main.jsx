import { StyleSheet, View, ActivityIndicator, FlatList, BackHandler } from 'react-native';
import Card from './Card';
import { useAppContext } from '../context/AppContext';
import { useEffect } from 'react';

export default function Main() {
  const {data: cards} = useAppContext();

  useEffect(() => {
    const backAction = () => {
      BackHandler.exitApp();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <>
      {cards.length === 0 ? (
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