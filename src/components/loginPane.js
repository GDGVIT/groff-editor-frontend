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
		this.SignEmail = React.createRef();
		this.SignPassword = React.createRef();
		this.SignUsername = React.createRef();
		this.LoginEmail = React.createRef();
		this.LoginPassword = React.createRef();
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
		if (this.state.option) {
			if (this.LoginEmail.current.value === "") {
				this.LoginEmail.current.className = formStyle.Incorrect;
			}
			if (this.LoginPassword.current.value === "") {
				this.LoginPassword.current.className = formStyle.Incorrect;
			}
		} else {
			if (this.SignEmail.current.value === "") {
				this.SignEmail.current.className = formStyle.Incorrect;
			}
			if (this.SignPassword.current.value === "") {
				this.SignPassword.current.className = formStyle.Incorrect;
			}
			if (this.SignUsername.current.value === "") {
				this.SignUsername.current.className = formStyle.Incorrect;
			}
		}
	};
	SignForm = () => {
		return (
			<div className={formStyle.UserForm}>
				<input
					type="text"
					placeholder="Username"
					onChange={this.ChangeHandler}
					ref={this.SignUsername}
					className={formStyle.InputField}
				/>
				<input
					type="text"
					placeholder="Email"
					className={formStyle.InputField}
					onChange={this.ChangeHandler}
					ref={this.SignEmail}
					style={{ marginTop: "25px" }}
				/>
				<input
					type="text"
					placeholder="Password (min: 6 chars)"
					className={formStyle.InputField}
					onChange={this.ChangeHandler}
					ref={this.SignPassword}
					style={{ marginTop: "25px" }}
				/>
			</div>
		);
	};
	LoginForm = () => {
		return (
			<div className={formStyle.UserForm}>
				<input
					type="text"
					placeholder="Email"
					ref={this.LoginEmail}
					onChange={this.ChangeHandler}
					className={formStyle.InputField}
				/>
				<input
					type="text"
					placeholder="Password "
					ref={this.LoginPassword}
					onChange={this.ChangeHandler}
					className={formStyle.InputField}
					style={{ marginTop: "25px" }}
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
						<a
							className={this.state.option ? classes.active : classes.LoginLink}
							onClick={this.LoginLinkHandler}
						>
							Login
						</a>
						<a
							className={this.state.option ? classes.SignLink : classes.activeMargin}
							onClick={this.SignLinkHandler}
						>
							SignUp
						</a>
						<div className={classes.Underbar}></div>
					</div>
				</div>
				{this.state.option ? (
					<this.LoginForm></this.LoginForm>
				) : (
					<this.SignForm></this.SignForm>
				)}
				<div className={formStyle.UserButtons}>
					<button
						type="submit"
						className={formStyle.SubButton}
						onClick={this.SubmitHandler}
					>
						Submit
					</button>
					<Link to="/editor" className={formStyle.GuestLink}>
						or continue as guest
					</Link>
				</div>
				<div className={classes.DSCLogoContainer}>
					<img src={DSCLogo} className={classes.DSCLogo} />
				</div>
			</div>
		);
	}
}
export default loginPane;
