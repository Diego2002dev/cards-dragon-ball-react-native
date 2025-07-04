import { useState, useEffect } from "react";

export function useFetchData(instance, api) {

    const [data, setData] = useState([]);

    useEffect(() => {

        const fetch = async () => {
            try{    

                const basicCharacters = await instance.get("characters?limit=78");
                const ids = (basicCharacters.data.items || basicCharacters.data).map( id => id.id);
                
                const detailedCharacters = await Promise.all(
                    ids.map(async (id) => {
                        const response = await instance.get(`${api}${id}`);
                        return response.data;
                    })
                )
                setData(detailedCharacters);
            }
            catch(error){
                console.error(error);
            }
        }
        fetch();
    }, [instance, api])

    return data;
}