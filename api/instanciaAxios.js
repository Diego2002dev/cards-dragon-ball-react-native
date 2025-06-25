import axios from "axios";

const instanciaAxios = axios.create({
    baseURL: process.env.EXPO_PUBLIC_DB_API_URL,
})

export default instanciaAxios;