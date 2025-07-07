import { Slot } from "expo-router";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { View, ActivityIndicator, StyleSheet, Text } from "react-native";
import { StatusBar } from "react-native";
import { AppProvider, useAppContext } from "../context/AppContext";
import { IS_DEVELOPMENT } from "../config/config";
import { SplashScreen } from "../components/SplashScreen";

import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

function InnerLayout() {

    const insets = useSafeAreaInsets();

    const {data, fontsLoaded, delayCompleted} = useAppContext();

    return (
        <View style={[styles.layoutContainer, {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
        }]}>
            {data.length > 0 && fontsLoaded && delayCompleted ? (
                <Animated.View 
                key="content"
                entering={FadeIn.duration(0)}
                exiting={FadeOut.duration(400)}>
                    <Slot />
                </Animated.View>
            ) : (
                <Animated.View
                key="splash"
                entering={FadeIn.duration(400)}
                exiting={FadeOut.duration(400)}
                >
                <SplashScreen />
                </Animated.View>
                )}

        </View>
  );
}

export default function Layout() {


     return (
    <SafeAreaProvider>
        <AppProvider>
            {/* <StatusBar style="auto" /> */}
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