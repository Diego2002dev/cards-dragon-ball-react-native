const { useFonts } = require("expo-font");

const FontCharge = () => {
    const [fontsLoaded] = useFonts({
            "Honk": require("../assets/fonts/Honk.ttf"),
            "Knewave-Regular": require("../assets/fonts/Knewave-Regular.ttf"),
            "BungeeInline-Regular": require("../assets/fonts/BungeeInline-Regular.ttf"),
    
        })
    return fontsLoaded;
}
export default FontCharge;