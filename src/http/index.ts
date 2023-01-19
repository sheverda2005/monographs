import axios from "axios";
import {AuthResponse} from "../models/AuthResponse";

const API_URL = "https://server-monographs.vercel.app/api"

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$api.interceptors.request.use((config) => {
    // @ts-ignore
    config.headers.Authorization = `Bearer ${localStorage.getItem("accessToken")}`
    return config
})


$api.interceptors.response.use((config) => {
    return config;
}, async (error)=> {
    const originalRequest = error.config
    error.config._isRetry = false
    if (error.response.status == 401 && error.config && !error.config._isRetry) {
        error.config._isRetry = true
        try {
            const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, { withCredentials: true })
            localStorage.setItem("accessToken", response.data.accessToken)
            return $api.request(originalRequest)
        } catch (e) {

        }
    }
    return error;
})

export default $api;