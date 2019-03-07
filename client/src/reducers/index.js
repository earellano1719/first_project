import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import profileReducer from './profileReducer';
import pinsReducer from './pinsReducer';


export default combineReducers({
    login: loginReducer,
    profile: profileReducer,
    pins: pinsReducer,
})