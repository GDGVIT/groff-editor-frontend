import React from "react";
import Document from "./Document/document";
import NewDocument from "./Document/newDocument";
import classes from "./Document/document.module.css";

const Documents = (props) => {
	const clickHandler = (id) => {
		props.clickEvent(id);
	};
	const docs = Object.keys(props.documents).map((docKey) => {
		return [...Array(props.documents[docKey])].map((_, i) => {
			return (
				<Document
					key={docKey + props.documents[docKey].id}
					doc={props.documents[docKey]}
					id={docKey}
					click={(id) => clickHandler(id)}
				></Document>
			);
		});
	});
	const style = {
		padding: "10px 0 0 10px",
		display: "flex",
		flexWrap: "wrap",
		flexDirection: "row",
	};
	return (
		<div style={style} className={classes.DocumentsContainer}>
			{docs}
			<NewDocument></NewDocument>
		</div>
	);
};

export default Documents;
