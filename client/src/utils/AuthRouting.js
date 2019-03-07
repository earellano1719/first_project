import React from "react";
import { Route, Redirect } from "react-router-dom";
import Auth from "./Auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return(    
    <Route
      {...rest}
      render={props =>
        Auth.isUserAuthenticated() ? 
        <Component {...props} {...rest} /> : <Redirect to="/auth/login"/>
        }/>)
};
      
export default PrivateRoute;