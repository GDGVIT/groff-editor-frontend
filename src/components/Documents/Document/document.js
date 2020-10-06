import React from "react";
import classes from "./document.module.css";
import { useHistory } from "react-router-dom";
import deleteIcon from "../../../assets/delete.png";

const Document = (props) => {
	let History = useHistory();
	return (
		<div
			className={classes.DocumentContainer}
			onClick={() => History.push("/editor/" + props.doc._id)}
		>
			<div
				className={classes.DeleteButton}
				onClick={(event) => {
					event.stopPropagation();
					props.delete(props.doc._id);
				}}
			>
				<img
					className={classes.DeleteButton}
					src={deleteIcon}
					alt="Delte Button"
				/>
			</div>
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
