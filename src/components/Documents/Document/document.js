import React from "react";
import classes from "./document.module.css";
import { useHistory } from "react-router-dom";

const Document = (props) => {
	let History = useHistory();
	return (
		<div
			className={classes.DocumentContainer}
			onClick={() => History.push("/editor/" + props.doc.fileName)}
		>
			<div className={classes.DocumentPreview}></div>
			<div className={classes.DocumentDetails}>
				<div className={classes.tooltip}>
					<div className={classes.DocumentName}>
						{props.doc.fileName}
					</div>
					<span className={classes.tooltiptext}>
						{props.doc.fileName}
					</span>
				</div>
				<div className={classes.DocumentTime}>{props.doc.time}</div>
			</div>
		</div>
	);
};
export default Document;
