import axios from 'axios';

export default axios.create({
    baseURL: 'http://127.0.0.1:8000',
    headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token') ,
        'Content-Type': 'application/json',
    }
})

axios.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token')
        config.headers['Authorization'] = 'Bearer ' + token
        return config
    },
    error => {
        Promise.reject(error)
    }
)