import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import "./App.css";
import SignupContainer from "./containers/SignupContainer";
import LoginContainer from "./containers/LoginContainer";
import PrivateRoute from "./containers/PrivateRoute";
import Dashboard from "./containers/Dashboard";
import EditProfile from "./containers/EditProfile";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <>
        <Router>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute exact path="/edit" component={EditProfile} />
            <Route exact path="/signup" component={SignupContainer} />
            <Route exact path="/login" component={LoginContainer} />
            {/* For testing */}
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/edit-profile" component={EditProfile} />
          </Switch>
        </Router>
      </>
    </Provider>
  );
}

export default App;
