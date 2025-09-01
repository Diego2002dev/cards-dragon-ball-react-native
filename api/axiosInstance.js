import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.EXPO_PUBLIC_DB_API_URL,
})

export default axiosInstance;