import axios from 'axios';

export const movieApi = axios.create({
    baseURL: process.env.EXPO_PUBLIC_TMDB_API_URL,
    params: {
        language: 'es-PE',
        api_key: process.env.EXPO_PUBLIC_TMDB_API_KEY
    }
});