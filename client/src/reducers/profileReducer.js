import { BOARD_VIEW, PINS_VIEW, FORM_VIEW, FORM_VIEW2 } from '../actions/types'

const initialState = {
    profileView: true,
    pinForm: false,
    boardForm: false,
}

export default function (state = initialState, action) {

    switch (action.type) {
        case BOARD_VIEW: return {
            ...state,
            profileView: action.payload
        }
        case PINS_VIEW: return {
            ...state,
            profileView: action.payload
        }
        case FORM_VIEW: return {
            ...state,
            pinForm: !state.pinForm
        }
        case FORM_VIEW2: return {
            ...state,
            boardForm: !state.boardForm
        }
        default:
            return state;
    }
}