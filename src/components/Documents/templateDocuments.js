import React from "react";
import NewDocument from "./Document/newDocument";
import classes from "./Document/document.module.css";
import TemplateDocument from "./Document/templateDocument";
import { single_column } from "../groff_cheatsheets/single_column";
import { double_column } from "../groff_cheatsheets/double_column";
import sColprev from "../../assets/Sinlge Column Preview.png";
import dColprev from "../../assets/Double Column Preview.png";

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
		<div
			style={style}
			className={classes.DocumentsContainer}
			id="documentcontainer"
		>
			<NewDocument></NewDocument>
			<TemplateDocument
				content={single_column}
				title="Copy of Single Column Research Paper Template"
				heading="Single Column Research Paper Template"
				bgImg={sColprev}
			></TemplateDocument>
			<TemplateDocument
				content={double_column}
				title="Copy of Double Column Research Paper Template"
				heading="Double Column Research Paper Template"
				bgImg={dColprev}
			></TemplateDocument>
		</div>
	);
};

export default TemplateDocuments;
