import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import MyProvider from "./context/MyProvider";
import Login from "./containers/login";
import Editor from "./containers/editor";
import Home from "./containers/home";
// eslint-disable-next-line
import css from "./App.css";
// import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

// const GlobalStyle = createGlobalStyle`
// .EditorBackground{
//   background-color: ${props =>
//     props.theme.mode === 'dark' ? '#111' : '#EEE'};
//   color: ${props =>
//     props.theme.mode === 'dark' ? '#EEE' : '#111'};
// }
// .EditorBackground > *{
//   background-color: ${props =>
//     props.theme.mode === 'dark' ? '#111' : '#EEE'};
//   color: ${props =>
//     props.theme.mode === 'dark' ? '#EEE' : '#111'};
// `

function App() {
	// const [theme, setTheme] = useState({mode:'dark'})
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
