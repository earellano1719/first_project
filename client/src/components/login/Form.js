import React from "react";
import { withRouter } from "react-router";
import { Route, Redirect } from "react-router-dom";
import '../../css/authForm.css'

const Form = ({
  match,
  full_name,
  email,
  username,
  password,
  isLoggedIn,
  loginUser,
  registerUser,
  handleChange
}) => {
  const path = match.path;
  return (
    <div className='form'>
   
      
        <a href={path === '/auth/login' ? '/auth/register' : '/auth/login'}>
          <button className='formLink'>{path === '/auth/login' ? 'Sign up' : 'Log in'}</button>
        </a>
      

      <form onSubmit={path === "/auth/login" ? loginUser : registerUser}>
        {path === '/auth/login' ?
          <div className='loginForm'>
          <img className='formLogo' src="http://backgroundcheckall.com/wp-content/uploads/2018/10/pinterest-logo-png-transparent-background-2.png" alt=''/>
          <p className='header'>Log in to see more</p>
          <p className='subHeader'>Access Pinterest's best ideas with a free account</p>
            <input
              autoComplete='off'
              className='inputs'
              type="text"
              value={username}
              name="username"
              placeholder="username"
              onChange={handleChange}
              required='required'
            />
            <input
              type="password"
              className='inputs'
              value={password}
              name="password"
              placeholder="password"
              onChange={handleChange}
              required='required'
            />
            <button type="submit">Log in</button>
          </div>
         
        :
          <div className='registerForm'>
          <img className='formLogo' src="http://backgroundcheckall.com/wp-content/uploads/2018/10/pinterest-logo-png-transparent-background-2.png" alt=''/>
          <p className='header'>Sign up to see more</p>
          <p className='subHeader'>Access Pinterest's best ideas with a free account</p>
            <input
              autoComplete='off'
              type="text"
              className='inputs'
              value={full_name}
              name="full_name"
              placeholder="full name"
              onChange={handleChange}
              required='required'
            />
            <input
              autoComplete='off'
              type="text"
              className='inputs'
              value={email}
              name="email"
              placeholder="email"
              onChange={handleChange}
              required='required'
            />
            <input
              autoComplete='off'
              type="text"
              className='inputs'
              value={username}
              name="username"
              placeholder="username"
              onChange={handleChange}
              required='required'
            />
            <input
              type="password"
              className='inputs'
              value={password}
              name="password"
              placeholder="password"
              onChange={handleChange}
              required='required'
            />
            <button type="submit">Continue</button>
          </div>
        }
      </form>
   
    </div>
  );
};

export default withRouter(Form);