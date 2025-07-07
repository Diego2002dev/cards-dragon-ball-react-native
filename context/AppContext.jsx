import { createContext, useContext, useEffect, useState } from "react";
import { useFetchData } from "../hooks/useFetchData";
import instanceAxios from "../api/instanceAxios";
import FontCharge from "../components/FontCharge";

const AppContext = createContext();

export const AppProvider = ({children}) => {

    const fontsLoaded = FontCharge();

    const characters = useFetchData(instanceAxios, "characters/")
    const [data, setData] = useState([]);
    const [delayCompleted, setDelayCompleted] = useState(false);

    useEffect(() => {
        if(characters) setData(characters);
    }, [characters])
    
    
    useEffect(() => {
        
        setTimeout(() => {
            setDelayCompleted(true);
        },5000)

    }, [delayCompleted])

    return(
        <AppContext.Provider value={{data, fontsLoaded, delayCompleted}}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext);