import { Meal } from '../models/Meal';
import { ADD_MEAL, DELETE_MEAL, SET_MEALS } from '../actions/actions';
import moment from 'moment';

const INITIAL_STATE: Meal[] = [];

export const mealReducer = (state = INITIAL_STATE, action: { type: string, payload: any }) => {
    //action : {type, payload}
    switch (action.type) {

        case SET_MEALS:

            return sortMeals(action.payload);
        case ADD_MEAL:
            const meals: Meal[] = [...state, action.payload]
            return sortMeals(meals);
        case DELETE_MEAL:
            return state.filter((meal) => meal.id != action.payload);
        default:
            return state;
    }
};

const sortMeals = (meals: Meal[]) => {
    meals.sort((a, b) => {
        const dateA = moment(a.date);
        const dateB = moment(b.date);

        if (dateA.isBefore(dateB)) {
            return -1; // Fecha A es anterior a Fecha B
        } else if (dateA.isAfter(dateB)) {
            return 1; // Fecha A es posterior a Fecha B
        } else {
            if (a.meal_type.id < b.meal_type.id) {
                // El primero es una comida anterior
                return -1;
            } else if (a.meal_type.id > b.meal_type.id) {
                // El segundo es una comida anterior
                return 1;
            } else {
                return 0; // Ambas fechas son iguales
            }
        }
    });
    return meals;
}
