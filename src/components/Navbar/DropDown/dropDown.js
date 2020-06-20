import classes from "../navbar.module.css";
import React from "react";
import logout from "../../../assets/Logout.png";
const DropDown = (props) => {
	return (
		<div className={classes.DropdownContainer}>
			<div className={classes.Triangle_up}></div>
			<div className={classes.Dropdown}>
				<div className={classes.ItemContainer} id="DarkMode">
					<div className={classes.DropItem}>Dark Mode</div>
					<div className={props.DarkMode ? classes.ToggleActive : classes.Toggle}>
						<div
							className={
								props.DarkMode ? classes.ToggleSwitchActive : classes.ToggleSwitch
							}
						></div>
					</div>
				</div>
				<div className={classes.ItemContainer} id="ViMode">
					<div className={classes.DropItem}>Vi Mode</div>
					<div className={props.ViMode ? classes.ToggleActive : classes.Toggle}>
						<div
							className={
								props.ViMode ? classes.ToggleSwitchActive : classes.ToggleSwitch
							}
						></div>
					</div>
				</div>
				<div className={classes.ItemContainer} id="Logout">
					<div className={classes.DropItem}>Logout</div>
					<div className={classes.LogoutContainer}>
						<img src={logout} alt="Fforg Logo" className={classes.LogoutIcon}></img>
					</div>
				</div>
			</div>
		</div>
	);
};
export default DropDown;
