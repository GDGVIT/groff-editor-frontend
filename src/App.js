import React from "react";
import "antd/dist/antd.css";
import { Route, BrowserRouter, Redirect, withRouter, Switch } from "react-router-dom";
import Login from "./containers/login";
import Editor from "./containers/editor";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Switch>
					<Route exact path="/" component={Login} />
					<Route exact path="/editor" component={Editor} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
