import classes from "./dropDown_editor.module.css";
import React from "react";
import MyContext from "../../../context/MyContext";

const DropDownEditor = (props) => {
	return (
		<div className={classes.DropdownContainer}>
			<div className={classes.Triangle_up}></div>
			<div className={classes.Dropdown}>
				<div className={classes.itemcontainer} id="DarkMode">
					<div className={classes.DropItem} id="DarkMode">
						Change Theme:
						<select
							name="theme"
							label="theme select"
							id="theme"
							onChange={(e) => props.handleTheme(e)}
							placeholder="Select a theme"
							className="EditorDropdown"
						>
							<option value="monokai">Monokai</option>
							<option value="nord_dark">Nord</option>
							<option value="solarized_light">
								Solarized Light
							</option>
							<option value="solarized_dark">
								Solarized Dark
							</option>
							<option value="github">Github</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	);
};
export default DropDownEditor;
