import { REGISTER_USER, LOGIN_USER, LOGGED_IN } from '../actions/types'

const initialState = {
    userDetails: {},
    isLoggedIn: false,
    username: ''
}

export default function (state = initialState, action) {

    switch (action.type) {
        case REGISTER_USER: return {
            ...state,
            username: action.payload
        }
        case LOGIN_USER: return {
            ...state,
            userDetails: action.payload
        }
        case LOGGED_IN: return {
            ...state,
            isLoggedIn: action.payload
        }
        default:
            return state;
    }
}