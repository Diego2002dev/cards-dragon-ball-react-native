import { Slot } from "expo-router";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import FontCharge from "../components/FontCharge";
import { StatusBar } from "react-native";


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

    const fontsLoaded = FontCharge();

    if (!fontsLoaded) {
        return <ActivityIndicator size="large" color="black" />
    }

     return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <InnerLayout />
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create ({
    layoutContainer: {
        flex: 1,
    },
})