import { BOARD_VIEW, PINS_VIEW, FORM_VIEW, FORM_VIEW2 } from './types'

export const boardsView = () => dispatch => {
    dispatch({
        type: BOARD_VIEW,
        payload: true
    })
};

export const pinsView = () => dispatch => {
    dispatch({
        type: PINS_VIEW,
        payload: false
    })
};

export const pinFormView = () => dispatch => {
    dispatch({
        type: FORM_VIEW
    })
};

export const boardFormView = () => dispatch => {
    dispatch({
        type: FORM_VIEW2
    })
};