import { ADD_BOARD } from '../actions/types';

const initialState = {

}

export default function (state = initialState, action) {

    switch (action.type) {
        case ADD_BOARD: return {
            ...state
        }
        default:
            return state;
    }
}