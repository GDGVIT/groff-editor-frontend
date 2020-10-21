import React from "react";
import classes from "./document.module.css";
import { useHistory } from "react-router-dom";
import deleteIcon from "../../../assets/delete.png";

const Document = (props) => {
	let History = useHistory();
	return (
		<div
			className={classes.DocumentContainer}
			onClick={() => History.push("/editor/" + props.doc.fileId)}
			id="document"
		>
			<div
				className={classes.DeleteButton}
				onClick={(event) => {
					event.stopPropagation();
					props.delete(props.doc.fileId);
				}}
			>
				<img
					className={classes.DeleteButton}
					src={deleteIcon}
					alt="Delte Button"
				/>
			</div>
			<div className={classes.tooltip}>
				<div className={classes.DocumentName}>{props.doc.fileName}</div>
				{/* <span className={classes.tooltiptext}> */}
				{/* 	{props.doc.fileName} */}
				{/* </span> */}
			</div>
			<div className={classes.DocumentTime}>{props.doc.time}</div>
		</div>
	);
};
export default Document;
