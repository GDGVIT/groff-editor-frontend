import React from "react";
import LoginPane from "../components/loginPane";
import ScreenshotPane from "../components/screenshotPane.js";

const Login = (props) => {
	return (
		<div className="LoginPage">
			<LoginPane props={props}></LoginPane>
			<ScreenshotPane></ScreenshotPane>
		</div>
	);
};
export default Login;
