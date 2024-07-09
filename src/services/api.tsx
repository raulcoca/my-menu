import axios from 'axios';
import { LoginRequest } from '../interfaces/requests/login-request';
import { User } from '../models/User';
import { Meal } from '../models/Meal';
import { MealType } from '../models/MealType';

const MEALS_API_URL = 'https://668c2e120b61b8d23b0cadbd.mockapi.io/api/v1/'

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

export const getMeals = async (): Promise<Meal[]> => {
    try {
        const response = await axios.get(`${MEALS_API_URL}meals`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error: any) {
        console.error('Error en la solicitud:', error.message);
        throw error;
    }
};

export const getMealTypes = async (): Promise<MealType[]> => {
    try {
        const response = await axios.get(`${MEALS_API_URL}types`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error: any) {
        console.error('Error en la solicitud:', error.message);
        throw error;
    }
};

export const createNewMeal = async (meal: Meal): Promise<Meal> => {
    try {
        const response = await axios.post(`${MEALS_API_URL}meals`, meal);
        return response.data;
    } catch (error: any) {
        console.error('Error en la solicitud:', error.message);
        throw error;
    }
};