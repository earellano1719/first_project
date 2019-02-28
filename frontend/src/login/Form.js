import React from "react";
import { withRouter } from "react-router";

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
    <React.Fragment>
      <h1> {path === "/auth/login" ? "Login" : "Register"} </h1>
      <form onSubmit={path === "/auth/login" ? loginUser : registerUser}>
        {path === '/auth/login' ?
          <>
            <input
              type="text"
              value={username}
              name="username"
              placeholder="username"
              onChange={handleChange}
            />
            <input
              type="text"
              value={password}
              name="password"
              placeholder="password"
              onChange={handleChange}
            />
          </>
        :
          <>
            <input
              type="text"
              value={full_name}
              name="full_name"
              placeholder="full_name"
              onChange={handleChange}
            />
            <input
              type="text"
              value={email}
              name="email"
              placeholder="email"
              onChange={handleChange}
            />
            <input
              type="text"
              value={username}
              name="username"
              placeholder="username"
              onChange={handleChange}
            />
            <input
              type="text"
              value={password}
              name="password"
              placeholder="password"
              onChange={handleChange}
            />
          </>
        }
        <button type="submit">Submit</button>
      </form>
      <p>{isLoggedIn ? "Logged In!" : ""}</p>
    </React.Fragment>
  );
};

export default withRouter(Form);