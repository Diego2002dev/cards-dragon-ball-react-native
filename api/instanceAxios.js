import axios from "axios";

const instanceAxios = axios.create({
    baseURL: process.env.EXPO_PUBLIC_DB_API_URL,
})

export default instanceAxios;