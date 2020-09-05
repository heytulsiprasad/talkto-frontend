import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import "./tailwind.generated.css";
import SignupContainer from "./components/SignupContainer/SingupContainer";
import LoginContainer from "./components/LoginContainer/LoginContainer";

function App() {
	return (
		<React.Fragment>
			<Router>
				<Switch>
					<Route path="/signup" component={SignupContainer} />
					<Route path="/login" component={LoginContainer} />
				</Switch>
			</Router>
		</React.Fragment>
	);
}

export default App;
