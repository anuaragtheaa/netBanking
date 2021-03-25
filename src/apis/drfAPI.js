import axios from 'axios';

export const base = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token') ,
        'Content-Type': 'application/json',
    }
})

export const register = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    headers: {
        'Content-Type': 'application/json'
    }
})
