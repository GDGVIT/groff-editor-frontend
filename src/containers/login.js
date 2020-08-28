import React from "react";
import LoginPane from "../components/loginPane";

const Login = (props) => {
	return (
		<div className="loginpage" style={{ backgroundColor: "#E79870" }}>
			<LoginPane props = {props}></LoginPane>
		</div>
	);
};
export default Login;
