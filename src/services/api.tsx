import axios from 'axios';
import { LoginRequest } from '../interfaces/requests/login-request';
import { User } from '../models/User';

export const setLogin = async (user: LoginRequest): Promise<User> => {
    user.expiresInMins = 30;
    try {
        const response = await axios.post(
            'https://dummyjson.com/auth/login',
            user,
            {
                headers: { 'Content-Type': 'application/json' },
            }
        );
        return response.data;
    } catch (error: any) {
        console.error('Error en la solicitud:', error.message);

        throw error;
    }
};

export const getDataUser = async (token: string) => {
    try {
        const response = await axios.get('https://dummyjson.com/auth/me', {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error: any) {
        console.error('Error en la solicitud:', error.message);
        throw error;
    }
};
