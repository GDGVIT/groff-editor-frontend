import React from "react";
import classes from "./navbar.module.css";
import logo from "../../assets/Logo.png";
import back from "../../assets/Back.png";

const Navbar = (props) => {
	return (
		<div className={classes.Navbar}>
			{!props.home ? (
				<div className={classes.BackButtonContainer}>
					<img className={classes.BackButton} src={back} alt="Back Button" />
				</div>
			) : null}
			<div className={classes.Heading}>{props.children}</div>
			<button className={classes.ExportButton}>Export to pdf</button>
			<div className={classes.Settings}>
				<img src={logo} className={classes.logo}></img>
			</div>
		</div>
	);
};
export default Navbar;
