import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser, checkAuthenticateStatus, loginUser } from '../../actions/loginActions'
import Auth from "../../utils/Auth";
import Form from "./Form";

class AuthForm extends Component {
  state = {
    full_name: '',
    email: '',
    username: '',
    password: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };


  registerUser = e => {
    e.preventDefault();
    const { full_name, email, username, password } = this.state;
    const user = {
      full_name: full_name,
      email: email,
      username: username,
      password: password
    };

    this.props.registerUser(user);
    this.setState({
      full_name: '',
      email: '',
      username: '',
      password: '',
    });
    this.props.checkAuthenticateStatus(username);
  };

  loginUser = e => {
    e.preventDefault();
    const { username, password } = this.state;
    const user = {
      username: username,
      password: password
    }
    this.props.loginUser(user);
    this.setState({
      username: "",
      password: ""
    });
  };

  logoutUser = () => {
    this.props.logoutUser();
    this.props.checkAuthenticateStatus();
  };

  render() {
    const { full_name, email, username, password } = this.state;
    const { isLoggedIn } = this.props;
    return (
      <Switch>
        <Route
          path="/auth/login"
          render={() => {
            return (
              <Form
                username={username}
                password={password}
                isLoggedIn={isLoggedIn}
                loginUser={this.loginUser}
                registerUser={this.registerUser}
                handleChange={this.handleChange}
              />
            );
          }}
        />
        <Route
          path="/auth/register"
          render={() => {
            return (
              <Form
                full_name={full_name}
                email={email}
                username={username}
                password={password}
                isLoggedIn={isLoggedIn}
                loginUser={this.loginUser}
                registerUser={this.registerUser}
                handleChange={this.handleChange}
              />
            );
          }}
        />
      </Switch>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (userDetails) => dispatch(registerUser(userDetails)),
    checkAuthenticateStatus: (userDetails) => dispatch(checkAuthenticateStatus(userDetails)),
    loginUser: (userDetails) => dispatch(loginUser(userDetails)),
  }
}

export default connect(null, mapDispatchToProps) (AuthForm)