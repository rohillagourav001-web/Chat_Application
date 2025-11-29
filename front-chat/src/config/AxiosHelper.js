import axios from 'axios';
export const baseURL="https://chat-application-cak2.onrender.com";
export const  httpClient = axios.create({
    baseURL: baseURL,

});