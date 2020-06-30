import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import classes from "./loginPane.module.css";
import formStyle from "./userForm.module.css";
import DSCLogo from "../assets/DSC.png";

class loginPane extends Component {
	state = {
		option: true,
	};
	constructor(props) {
		super(props);
		this.Email = React.createRef();
		this.Password = React.createRef();
	}
	onFinish = (values) => {
		console.log("Received values of form: ", values);
	};
	LoginLinkHandler = () => {
		if (!this.state.option) {
			this.setState({
				option: true,
			});
		}
	};
	SignLinkHandler = () => {
		if (this.state.option) {
			this.setState({
				option: false,
			});
		}
	};
	ChangeHandler(e) {
		e.target.className = formStyle.InputField;
	}
	SubmitHandler = () => {
		if (this.Email.current.value === "") {
			this.Email.current.className = formStyle.Incorrect;
		}
		if (this.Password.current.value === "") {
			this.Password.current.className = formStyle.Incorrect;
		}
	};
	Form = (props) => {
		return (
			<div className={formStyle.UserForm}>
				<input
					type="text"
					placeholder="Email"
					ref={this.Email}
					onChange={this.ChangeHandler}
					className={formStyle.InputField}
					label="Username"
				/>
				<input
					type="text"
					placeholder={props.option ? "Password " : "Password (Min 6 Chars) "}
					ref={this.Password}
					onChange={this.ChangeHandler}
					className={formStyle.InputField}
					style={{ marginTop: "25px" }}
					label="Password"
				/>
			</div>
		);
	};
	render() {
		return (
			<div className={classes.LoginPane}>
				<div className={classes.LogoBanner}>
					<div className={classes.LogoContainer}>
						<img src={logo} alt="Fforg" className={classes.Logo} />
					</div>
					<div className={classes.LogoName}>Fforg</div>
				</div>
				<div className="">
					<div className={classes.Itemlist}>
						<div
							className={this.state.option ? classes.active : classes.LoginLink}
							onClick={this.LoginLinkHandler}
						>
							Login
						</div>
						<div
							className={this.state.option ? classes.SignLink : classes.activeMargin}
							onClick={this.SignLinkHandler}
						>
							SignUp
						</div>
						<div className={classes.Underbar}></div>
					</div>
				</div>
				<this.Form option={this.state.option} />
				<div className={formStyle.UserButtons}>
					<button
						type="submit"
						className={formStyle.SubButton}
						onClick={this.SubmitHandler}
					>
						Submit
					</button>
					<Link to="/home" className={formStyle.GuestLink}>
						or continue as guest
					</Link>
				</div>
				<div className={classes.DSCLogoContainer}>
					<img src={DSCLogo} alt="DSC-Vit Logo" className={classes.DSCLogo} />
				</div>
			</div>
		);
	}
}
export default loginPane;
