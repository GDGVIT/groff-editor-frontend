import React from "react";
import LoginPane from "../components/loginPane";
import ScreenshotPane from "../components/screenshotPane.js";

const Login = () => {
	return (
		<div className="LoginPage">
			<LoginPane></LoginPane>
			<ScreenshotPane></ScreenshotPane>
		</div>
	);
};
export default Login;
