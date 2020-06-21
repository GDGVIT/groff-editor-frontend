import React from "react";
import classes from "./document.module.css";
import AddIcon from "../../../assets/AddIcon.png";

const NewDocument = (props) => {
	return (
		<div className={classes.NewDocumentContainer}>
			<img className={classes.AddIcon} src={AddIcon} alt="Add Document Icon"></img>
		</div>
	);
};
export default NewDocument;
