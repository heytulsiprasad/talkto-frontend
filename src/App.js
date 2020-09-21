import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";
import SignupContainer from "./containers/SignupContainer";
import LoginContainer from "./containers/LoginContainer";
import PrivateRoute from "./containers/PrivateRoute";
import PublicRoute from "./containers/PublicRoute";
import Dashboard from "./containers/Dashboard";
import EditProfile from "./containers/EditProfile";
// import store from "./redux/store";

import { setAuthState } from "./redux/actions/authActions";

const App = ({ isAuth, setAuthState }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/auth/state", { withCredentials: true })
      .then((res) => {
        setAuthState(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(true);
        throw new Error(err);
      });
  }, []);

  return (
    <>
      <Router>
        <Switch>
          <PrivateRoute
            exact
            path="/"
            isLoading={isLoading}
            isAuthenticated={isAuth}
            component={Dashboard}
          />
          <PrivateRoute
            exact
            path="/edit"
            isLoading={isLoading}
            isAuthenticated={isAuth}
            component={EditProfile}
          />
          <PublicRoute
            exact
            isLoading={isLoading}
            isAuthenticated={isAuth}
            path="/signup"
            component={SignupContainer}
          />
          <PublicRoute
            exact
            isLoading={isLoading}
            isAuthenticated={isAuth}
            path="/login"
            component={LoginContainer}
          />
        </Switch>
      </Router>
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAuthState })(App);
