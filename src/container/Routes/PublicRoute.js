import React from "react";
import { Redirect, Route } from "react-router-dom";
import { isLogin } from "../Utilities/index";

function PublicRoute({ componet: Component, restricted = false, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() && restricted ?
         <Redirect to={"/"} /> : 
         <Component {...props} />
      }
    />
  );
}

export default PublicRoute;
