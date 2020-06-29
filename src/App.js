import React from "react";
import "antd/dist/antd.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import MyProvider from "./context/MyProvider";
import Login from "./containers/login";
import Editor from "./containers/editor";
import Home from "./containers/home";

function App() {
	return (
		<BrowserRouter>
			<MyProvider>
				<div className="App" style={{ backgroundColor: "white" }}>
					<Switch>
						<Route exact path="/" component={Login} />
						<Route exact path="/home" component={Home} />
						<Route exact path="/editor/:doc" component={Editor} />
					</Switch>
				</div>
			</MyProvider>
		</BrowserRouter>
	);
}

export default App;
