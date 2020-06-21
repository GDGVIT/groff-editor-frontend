import React from "react";
import classes from "./document.module.css";

const Document = (props) => {
	console.log("Im");
	return (
		<div className={classes.DocumentContainer}>
			<div className={classes.DocumentPreview}></div>
			<div className={classes.DocumentDetails}>
				<div className={classes.DocumentName}>{props.doc.name}</div>
				<div className={classes.DocumentTime}>{props.doc.time}</div>
			</div>
		</div>
	);
};
export default Document;
