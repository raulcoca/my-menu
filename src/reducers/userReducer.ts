
import { DO_LOGOUT, SET_USER } from '../actions/actions';
import { User } from '../models/User';

const INITIAL_STATE: User = {};

export const userReducer = (state = INITIAL_STATE, action: { type: string, payload: any }) => {
    //action : {type, payload}
    switch (action.type) {
        case SET_USER:
            return action.payload;
        case DO_LOGOUT:
            // return state.filter((meal) => meal.id != action.payload);
            localStorage.removeItem('user');
            return {};
        default:
            return state;
    }
};
