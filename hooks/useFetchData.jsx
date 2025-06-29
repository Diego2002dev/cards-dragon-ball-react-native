import { useState, useEffect } from "react";

export function useFetchData(instance, api) {

    const [data, setData] = useState([]);

    useEffect(() => {

        const fetch = async () => {
            try{    
                const response = await instance.get(api);
                setData(response.data.items || response.data);
            }
            catch{
                const error = console.error(error);
            }
        }
        fetch();
    }, [api])

    return data;
}