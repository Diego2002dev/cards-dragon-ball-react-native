import { Slot } from "expo-router";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { View, ActivityIndicator, StyleSheet, Text } from "react-native";
import { StatusBar } from "react-native";
import { AppProvider, useAppContext } from "../context/AppContext";
import { IS_DEVELOPMENT } from "../config/config";
import { SplashScreen } from "../components/SplashScreen";


function InnerLayout() {

    const insets = useSafeAreaInsets();

    const {data, fontsLoaded, delayCompleted} = useAppContext();

    return (
        <View style={[styles.layoutContainer, {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
        }]}>
            {data.length > 0 && fontsLoaded && delayCompleted ? <Slot /> : <SplashScreen />}
        </View>
  );
}

export default function Layout() {


     return (
    <SafeAreaProvider>
        <AppProvider>
            <StatusBar style="auto" />
            <InnerLayout />
            {IS_DEVELOPMENT && (       
                    <Text style={{position: "absolute", bottom: 0, margin: 3, alignSelf: "flex-end"}}>
                        Estamos desarrollando
                    </Text>
                )}
        </AppProvider>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create ({
    layoutContainer: {
        // flex: 1,
    },
})