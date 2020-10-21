import React from "react";
import NewDocument from "./Document/newDocument";
import classes from "./Document/document.module.css";

const TemplateDocuments = () => {
	const style = {
		justifyContent: "center",
		padding: "10px 0 0 10px",
		display: "flex",
		flexWrap: "wrap",
		flexDirection: "row",
		backgroundColor: "#eee",
	};
	return (
		<div style={style} className={classes.DocumentsContainer}>
			<NewDocument></NewDocument>
		</div>
	);
};

export default TemplateDocuments;
