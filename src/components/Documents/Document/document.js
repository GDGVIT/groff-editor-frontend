import React from "react";
import classes from "./document.module.css";
import { useHistory } from "react-router-dom";

const Document = (props) => {
	let History = useHistory();
	return (
		<div
			className={classes.DocumentContainer}
			onClick={() => History.push("/editor/" + props.doc.id)}
		>
			<div className={classes.DocumentPreview}></div>
			<div className={classes.DocumentDetails}>
				<div className={classes.DocumentName}>{props.doc.name}</div>
				<div className={classes.DocumentTime}>{props.doc.time}</div>
			</div>
		</div>
	);
};
export default Document;
