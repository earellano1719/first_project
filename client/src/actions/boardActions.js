import { ADD_BOARD } from './types'
import axios from 'axios'

export const addBoard = (board) => dispatch => {
    axios.post("/boards", board)
    .then(() => {
        dispatch({
            type: ADD_BOARD
        })
    })
};

//boards with pins from current user
export const getBoardsPins = (username) => dispatch => {
    axios.post("/boards/" + username)
    .then((res) => {
        debugger
        dispatch({
            type: ADD_BOARD
        })
    })
};


