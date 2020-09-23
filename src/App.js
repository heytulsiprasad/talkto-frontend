import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

import "./App.css";
import SignupContainer from "./containers/SignupContainer";
import LoginContainer from "./containers/LoginContainer";
import PrivateRoute from "./containers/PrivateRoute";
import PublicRoute from "./containers/PublicRoute";
import Dashboard from "./containers/Dashboard";
import EditProfile from "./containers/EditProfile";
import FourOhFour from "./containers/FourOhFour";

import { setAuthState } from "./redux/actions/authActions";

const backendURL =
  process.env.NODE_ENV === "production"
    ? "https://talk-to-network.herokuapp.com"
    : "http://localhost:5000";

const App = ({ isAuth, setAuthState }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${backendURL}/auth/state`, { withCredentials: true })
      .then((res) => {
        setAuthState(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(true);
        throw new Error(err);
      });
    // eslint-disable-next-line
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
          <Route path="*" component={FourOhFour} />
        </Switch>
      </Router>
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAuthState })(App);
