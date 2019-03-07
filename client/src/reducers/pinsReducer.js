import { GET_PINS, ADD_PINS } from '../actions/types';

const initialState = {
    userPins: []
}

export default function (state = initialState, action) {

    switch (action.type) {
        case GET_PINS: return {
            ...state,
            userPins: action.payload
        }
        case ADD_PINS: return {
            ...state
        }
        default:
            return state;
    }
}