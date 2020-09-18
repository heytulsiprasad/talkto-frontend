/* eslint-disable no-nested-ternary */
/* eslint-disable implicit-arrow-linebreak */

import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";

import Loading from "../components/Loading";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/auth/state", { withCredentials: true })
      .then((res) => {
        setIsAuthenticated(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(true);
        throw new Error(err);
      });
  }, []);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoading ? (
          <Loading />
        ) : isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default PrivateRoute;
