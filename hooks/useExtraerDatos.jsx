import axios from "axios"
import { useState, useEffect } from "react";
import instanciaAxios from "../api/instanciaAxios";

export function useExtraerDatos(instancia, api) {

    const [datos, setDatos] = useState([]);

    useEffect(() => {

        const fetch = async () => {
            try{    
                const response = await instanciaAxios.get(api);
                setDatos(response.data.items || response.data);
            }
            catch{
                const error = console.error(error);
            }
        }
        fetch();
    }, [api])

    return datos;
}