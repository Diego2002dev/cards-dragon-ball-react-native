import { Slot } from "expo-router";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { View, ActivityIndicator, StyleSheet, Text } from "react-native";
import { useFonts } from 'expo-font';


function InnerLayout() {

    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.layoutContainer, {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
        }]}>
            <Slot />
        </View>
  );
}   

export default function Layout() {

    const [fontsLoaded] = useFonts({
        "Honk": require("../assets/fonts/Honk.ttf"),
        "SaiyanSans": require("../assets/fonts/SaiyanSans.ttf"),
    })

    if (!fontsLoaded) {
        return <ActivityIndicator size="large" color="black" />  // <=Futuro COMPONENTE
    }

     return (
    <SafeAreaProvider>
      <InnerLayout />
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create ({
    layoutContainer: {
        flex: 1,
    },
})