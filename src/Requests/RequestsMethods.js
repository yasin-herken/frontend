import axios from "axios";

export const BASE_URL = "http://localhost:8081";

export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const userRequest = (TOKEN)=>axios.create({
    baseURL: BASE_URL,
    headers: { authorization: TOKEN }
})