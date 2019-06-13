import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import axios from 'axios'
import {NavBar} from './Components/Navbar'
import { Profile } from './Components/Profile/Profile'
import { Pins } from './Components/Pins/Pins'
import { SingleBoard } from './Components/Boards/SingleBoard'
import { SinglePin } from './Components/Pins/SinglePin'
import AuthForm from "./login/AuthForm";
import Auth from "./utils/Auth";
import PrivateRoute from "./utils/AuthRouting";
import './styles.css'



class App extends Component {
  state= {
    isLoggedIn: false,
    user: '',
    users: [],
    pins: [],
    boards: [],
    profileStart: true,
  }

  componentDidMount() {
    this.checkAuthenticateStatus();
  }

  checkAuthenticateStatus = () => {
    axios.post("/users/isLoggedIn").then(user => {
      if (user.data.username === Auth.getToken()) {
        this.getAll();
        this.setState({
          isLoggedIn: Auth.isUserAuthenticated(),
          username: Auth.getToken()
        });
      } else {
        if (user.data.username) {
          this.logoutUser();
        } else {
          Auth.deauthenticateUser();
        }
      }
    });
  };

  logoutUser = () => {
    axios
      .post("/users/logout")
      .then(() => {
        Auth.deauthenticateUser();
      })
      .then(() => {
        this.checkAuthenticateStatus();
      });
  };

  getUsers = () => {
    axios.get('/users')
    .then((userdata) => {
      this.setState({
        users: userdata.data.users
      })
    })
  }

  getPins = () => {
    axios.get('/pins/john')
    .then((pindata) => {
      this.setState({
        pins: pindata.data.pins
      })
    })
  }

  getBoards = () => {
    axios.get('/boards')
    .then((boarddata) => {
      this.setState({
        boards: boarddata.data.boards
      })
    })
  }

  goBack = () => {
    window.history.back();
  }

  getAll = () => {
    this.getPins();
    this.getBoards();
    this.getUsers();
  }

  handleProfileStartBoards = () => {
    this.setState({
      profileStart: true
    })
  }

  handleProfileStartPins = () => {
    this.setState({
      profileStart: false
    })
  }

  
  
  render() {

    const { isLoggedIn, username, users, pins, boards, profileStart  } = this.state

    let greeting = isLoggedIn ? (
      <span>
        Welcome {username} {" ~ "}
      </span>
    ) : null;
    let logoutButton = isLoggedIn ? (
      <span>
        <button onClick={this.logoutUser}>Logout</button> {" ~ "}
      </span>
    ) : null;

    
    return (
      <>
      <BrowserRouter>
        <div className="App">

          <Route render={(props) => <NavBar {...props} isLoggedIn={isLoggedIn} username={username} />} />
          <div>
            {greeting} {logoutButton}
          </div>

          <Route path='/boards/:board_id' render={(props) => <SingleBoard {...props}
                                                              boards={boards}
                                                              pins={pins}
                                                              goBack={this.goBack} />} />

          <Route path='/pins/:pin_id' render={(props) => <SinglePin {...props}
                                                          pins={pins}
                                                          goBack={this.goBack} />} />

          <Route path='/users/:user_id' render={(props) => <Profile {...props}
                                                            profileStart={profileStart}
                                                            handleProfileStartBoards={this.handleProfileStartBoards}
                                                            handleProfileStartPins={this.handleProfileStartPins}
                                                            pins={pins}
                                                            boards={boards}
                                                            users={users} />} />

                                              


          <Route path='/auth/login' render={() => isLoggedIn ? <Redirect to='/' /> : <AuthForm
                                                          checkAuthenticateStatus={this.checkAuthenticateStatus}
                                                          isLoggedIn={isLoggedIn}
                                                          /> } />

          <Route path='/auth/register' render={() => isLoggedIn ? <Redirect to='/' /> : <AuthForm
                                                          checkAuthenticateStatus={this.checkAuthenticateStatus}
                                                          isLoggedIn={isLoggedIn}
                                                          /> } />
          

          <Route exact path='/' render={() => isLoggedIn ? <Pins 
                                                            pins={pins}
                                                            users={users}
                                                            /> : <Redirect to='/auth/login' /> }/>
        </div>
      </BrowserRouter>

      </>
    );
  }
}

export default App;