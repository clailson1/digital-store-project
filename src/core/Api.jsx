import axios from 'axios';

const Api = axios.create({
    baseURL: 'http://localhost:3000/'
});

// Interceptor para adicionar o token às requisições
Api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default Api;