import { REGISTER_USER, LOGIN_USER, LOGGED_IN } from './types'
import axios from 'axios';
import Auth from "../utils/Auth";

export const checkAuthenticateStatus = (userDetails) => dispatch => {
    axios.post("/users/isLoggedIn")
    .then((res) => {
        if (res.data.username === Auth.getToken()) {
        dispatch({
          type: LOGGED_IN,
          payload: Auth.isUserAuthenticated(),
        })
      } else {
        if (userDetails.data.username) {
          this.logoutUser();
        } else {
          Auth.deauthenticateUser();
        }
      }
    }).catch(err => {
    })
  };

export const registerUser = userDetails => dispatch => {
    axios.post("/users", userDetails)
    .then(() => {
        dispatch({
            type: REGISTER_USER,
            payload: userDetails.username
        })
    })
    .then(() => {
        dispatch(loginUser(userDetails));
    })
  };

  export const loginUser = (userDetails) => dispatch => {
    let username = userDetails.username;
    let password = userDetails.password;
    Auth.authenticateUser(userDetails.username);
    axios
    .post("/users/login", { username, password })
    .then((user) => {
        dispatch({
            type: LOGIN_USER,
            payload: user.data
        })
    })
    .then(() => {
        dispatch(checkAuthenticateStatus(username));
    })
  }

  export const logoutUser = () => dispatch => {
    axios
      .post("/users/logout")
      .then(() => {
        Auth.deauthenticateUser();
      })
      .then(() => {
          dispatch(checkAuthenticateStatus())
      })
  };

  export const userInfo = (info) => dispatch => {
    axios
    .get('/users/' + info)
    .then((res) => {
      dispatch({
        type: LOGIN_USER,
        payload: res.data.user
    })
    })
  };
