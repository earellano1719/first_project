import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { checkAuthenticateStatus, logoutUser, userInfo } from './actions/loginActions'
import AuthForm from './components/login/AuthForm';
import Auth from './utils/Auth';
import PrivateRoute from './utils/AuthRouting';
import  Navbar  from './components/Navbar';
import Pins from './components/Pins/Pins'; 
import Profile from './components/Profile/Profile'; 
import PrivateProfile from './components/Profile/PrivateProfile'; 


class App extends Component {

  componentDidMount = () => {
    this.props.checkAuthenticateStatus();
    this.props.userInfo(Auth.getToken());
  }

  render() {
    const { isLoggedIn } = this.props;
    let username = isLoggedIn ? Auth.getToken() : null;
    return (
        
        <BrowserRouter>


          <div className="App">
          <Navbar />
            <Route exact path='/:username' component={Profile} />
            {/* {isLoggedIn ? <PrivateRoute exact path={`/${username}`} component={PrivateProfile} /> : null} */}
            <Route path='/auth/login' component={AuthForm} />
            <Route path='/auth/register' component={AuthForm} />
            <PrivateRoute 
              exact path='/' 
              component={Pins} 
            />  
          </div>

        </BrowserRouter>
        
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.login.isLoggedIn,
  userDetails: state.login.userDetails
})

const mapDispatchToProps = (dispatch) => {
  return {
    checkAuthenticateStatus: (userDetails) => dispatch(checkAuthenticateStatus(userDetails)),
    logoutUser: () => dispatch(logoutUser()),
    userInfo: (info) => dispatch(userInfo(info)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App)

