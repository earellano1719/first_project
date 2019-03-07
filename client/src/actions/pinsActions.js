import { GET_PINS, ADD_PINS } from './types'
import axios from 'axios'

export const addPin = (pin) => dispatch => {
    axios.post("/pins", pin)
    .then(() => {
        dispatch({
            type: ADD_PINS
        })
    })
  };
