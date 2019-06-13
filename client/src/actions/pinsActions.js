import { GET_PINS, ADD_PINS } from './types'
import axios from 'axios'

export const getUserPins = (username) => dispatch => {
    axios.get("/pins/" + username)
    .then((res) => {
        dispatch({
            type: GET_PINS,
            payload: res.data.pins
        })
    })
};

export const addPin = (pin) => dispatch => {
    axios.post("/pins", pin)
    .then(() => {
        dispatch({
            type: ADD_PINS
        })
    })
  };
