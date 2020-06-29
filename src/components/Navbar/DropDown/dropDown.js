import classes from "./dropDown.module.css";
import React from "react";
import logout from "../../../assets/Logout.svg";
import MyContext from "../../../context/MyContext";

const DropDown = (props) => {
	return (
		<MyContext.Consumer>
			{(context) => {
				return (
					<div className={classes.DropdownContainer}>
						<div className={classes.Triangle_up}></div>
						<div className={classes.Dropdown}>
							<div
								className={classes.ItemContainer}
								id="DarkMode"
								onClick={(e) => props.onclick(e)}
							>
								<div className={classes.DropItem} id="DarkMode">
									Dark Mode
								</div>
								<div
									id="DarkMode"
									className={
										context.DarkMode ? classes.ToggleActive : classes.Toggle
									}
								>
									<div
										id="DarkMode"
										className={
											context.DarkMode
												? classes.ToggleSwitchActive
												: classes.ToggleSwitch
										}
									></div>
								</div>
							</div>
							<div
								className={classes.ItemContainer}
								id="ViMode"
								onClick={(e) => props.onclick(e)}
							>
								<div id="ViMode" className={classes.DropItem}>
									Vi Mode
								</div>
								<div
									id="ViMode"
									className={
										context.ViMode ? classes.ToggleActive : classes.Toggle
									}
								>
									<div
										id="ViMode"
										className={
											context.ViMode
												? classes.ToggleSwitchActive
												: classes.ToggleSwitch
										}
									></div>
								</div>
							</div>
							<div
								className={classes.ItemContainer}
								onClick={(e) => props.onclick(e)}
								id="Logout"
							>
								<div id="Logout" className={classes.DropItem}>
									Logout
								</div>
								<div id="Logout" className={classes.LogoutContainer}>
									<img
										id="Logout"
										src={logout}
										alt="Fforg	Logo"
										className={classes.LogoutIcon}
									></img>
								</div>
							</div>
						</div>
					</div>
				);
			}}
		</MyContext.Consumer>
	);
};
export default DropDown;
