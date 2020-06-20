import React, { Component } from "react";
import classes from "./navbar.module.css";
import logo from "../../assets/Logo.png";
import back from "../../assets/Back.png";
import Dropdown from "./DropDown/dropDown";
import MyContext from "../../context/MyContext";

class Navbar extends Component {
	static contextType = MyContext;
	state = {
		DarkMode: false,
		Dropdown: true,
	};
	render() {
		const { ContextMutator } = this.context;

		return (
			<div>
				<div className={classes.Navbar}>
					{!this.props.home ? (
						<div className={classes.BackButtonContainer}>
							<img className={classes.BackButton} src={back} alt="Back Button" />
						</div>
					) : null}
					<div className={classes.Heading}>{this.props.children}</div>
					{!this.props.home ? (
						<button className={classes.ExportButton}>Export to pdf</button>
					) : null}
					<div className={!this.props.home ? classes.Settings : classes.SettingsMargin}>
						<img src={logo} alt="Fforg Logo" className={classes.logo}></img>
					</div>
					{this.state.Dropdown ? (
						<Dropdown
							DarkMode={this.state.DarkMode}
							ViMode={this.state.ViMode}
							onclick={(e) => ContextMutator(e.target.id)}
						></Dropdown>
					) : null}
				</div>
			</div>
		);
	}
}
export default Navbar;
