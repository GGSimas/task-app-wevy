import { AppError } from '@/domain/errors/app-error';
import axios from 'axios';
import { getItem, STORAGED_KEYS } from './secure-stored';


const axiosClient = axios.create({
    baseURL: 'http://192.168.5.11:3333',
})

axiosClient.interceptors.request.use(
    async (config) => {
        const token = await getItem(STORAGED_KEYS.token);

        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }

        return config
    }
)

axiosClient.interceptors.response.use(
    (response) => response,
    (error) => {
        console.log(error)
        if (error.response && error.response.data) {
            return Promise.reject(new AppError(error.response.data.message))
        }
    }
);

export {
    axiosClient
}