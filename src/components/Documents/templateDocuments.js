import React from "react";
import NewDocument from "./Document/newDocument";
import classes from "./Document/document.module.css";

const TemplateDocuments = () => {
	const style = {
		justifyContent: "center",
		padding: "70px 0 0 10px",
		display: "flex",
		flexWrap: "wrap",
		flexDirection: "row",
		backgroundColor: "#eee",
	};
	return (
		<div style={style} className={classes.DocumentsContainer}  id="documentcontainer">
			<NewDocument content = ""></NewDocument>
			<NewDocument content = "I am doing a test"></NewDocument>
		</div>
	);
};

export default TemplateDocuments;
