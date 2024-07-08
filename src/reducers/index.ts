import { combineReducers } from 'redux';
import { mealReducer } from './mealReducers';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
    meals: mealReducer,
    user: userReducer
});
