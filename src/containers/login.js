import React from "react";
import LoginPane from "../components/loginPane";
import ScreenshotPane from "../components/screenshotPane.js";
import classes from "../components/screenshotPane.module.css";

const Login = () => {
	const style = {
		backgroundColor: "#E79870",
		display: "flex",
	};
	return (
		<div className="LoginPage">
			<LoginPane></LoginPane>
			<ScreenshotPane></ScreenshotPane>
		</div>
	);
};
export default Login;
