import { ADD_BOARD, GET_BOARDS_PINS } from '../actions/types';

const initialState = {

}

export default function (state = initialState, action) {

    switch (action.type) {
        case ADD_BOARD: return {
            ...state
        }
        case GET_BOARDS_PINS: return {
            ...state,
            payload: action.type
        }
        default:
            return state;
    }
}