/* eslint-disable no-nested-ternary */
/* eslint-disable implicit-arrow-linebreak */

import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import Loading from "../components/Loading";

const PublicRoute = ({
  component: Component,
  isLoading,
  isAuthenticated,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      isLoading ? (
        <Loading />
      ) : !isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

PublicRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default PublicRoute;
