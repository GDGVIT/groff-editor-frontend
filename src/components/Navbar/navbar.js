import React, { Component } from "react";
import classes from "./navbar.module.css";
import logo from "../../assets/Logo.png";
import back from "../../assets/Back.png";
import logout from "../../assets/Logout.png";

class Navbar extends Component {
	state = {
		DarkMode: false,
		ViMode: false,
		Dropdown: false,
	};
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<div className={classes.Navbar}>
					{!this.props.home ? (
						<div className={classes.BackButtonContainer}>
							<img className={classes.BackButton} src={back} alt="Back	Button" />
						</div>
					) : null}
					<div className={classes.Heading}>{this.props.children}</div>
					{!this.props.home ? (
						<button className={classes.ExportButton}>Export to pdf</button>
					) : null}
					<div className={!this.props.home ? classes.Settings : classes.SettingsMargin}>
						<img src={logo} className={classes.logo}></img>
					</div>
				</div>
				<div className={classes.DropdownContainer}>
					<div className={classes.Triangle_up}></div>
					<div className={classes.Dropdown}>
						<div className={classes.ItemContainer} id="DarkMode">
							<div className={classes.DropItem}>Dark Mode</div>
							<div
								className={
									this.state.DarkMode ? classes.ToggleActive : classes.Toggle
								}
							>
								<div
									className={
										this.state.DarkMode
											? classes.ToggleSwitchActive
											: classes.ToggleSwitch
									}
								></div>
							</div>
						</div>
						<div className={classes.ItemContainer} id="ViMode">
							<div className={classes.DropItem}>Vi Mode</div>
							<div
								className={
									this.state.ViMode ? classes.ToggleActive : classes.Toggle
								}
							>
								<div
									className={
										this.state.ViMode
											? classes.ToggleSwitchActive
											: classes.ToggleSwitch
									}
								></div>
							</div>
						</div>
						<div className={classes.ItemContainer} id="Logout">
							<div className={classes.DropItem}>Logout</div>
							<div className={classes.LogoutContainer}>
								<img src={logout} className={classes.LogoutIcon}></img>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Navbar;
