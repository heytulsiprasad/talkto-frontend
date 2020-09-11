import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import "./App.css";
import SignupContainer from "./containers/SignupContainer";
import LoginContainer from "./containers/LoginContainer";
import PrivateRoute from "./containers/PrivateRoute";
import Dashboard from "./containers/Dashboard";
import store from "./redux/store";

function App() {
	return (
		<Provider store={store}>
			<React.Fragment>
				<Router>
					<Switch>
						<PrivateRoute exact path="/" component={Dashboard} />
						<Route exact path="/signup" component={SignupContainer} />
						<Route exact path="/login" component={LoginContainer} />
						<Route exact path="/dash" component={Dashboard} />
					</Switch>
				</Router>
			</React.Fragment>
		</Provider>
	);
}

export default App;
