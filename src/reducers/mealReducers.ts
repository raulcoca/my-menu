import { Meal } from '../models/Meal';
import { ADD_MEAL, DELETE_MEAL } from '../actions/actions';

const INITIAL_STATE: Meal[] = [];

export const mealReducer = (state = INITIAL_STATE, action: { type: string, payload: any }) => {
    //action : {type, payload}
    switch (action.type) {
        case ADD_MEAL:
            return [...state, action.payload];
        case DELETE_MEAL:
            return state.filter((meal) => meal.id != action.payload);
        default:
            return state;
    }
};
