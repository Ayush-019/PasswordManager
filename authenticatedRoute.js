import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const AuthenticatedRoute = ({ component: Component, ...rest }) => {
  //rest are exact,path and anything else left
  const {  isAuthenticated } = useSelector((state) => state.user);

  return (
    <Fragment>
      <Route
        {...rest}
        render={(props) => {
          if (isAuthenticated === false) {
            return <Redirect to="/login" />;
          }

          return <Component {...props} />;
        }}
      />
    </Fragment>
  );
};

export default AuthenticatedRoute;
