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
