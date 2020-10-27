import React from "react";
import Document from "./Document/document";
import classes from "./Document/document.module.css";

const Documents = (props) => {
	const docs = Object.keys(props.documents).map((docKey) => {
		return [...Array(props.documents[docKey])].map((_, i) => {
			return (
				<Document
					key={docKey + props.documents[docKey].id}
					doc={props.documents[docKey]}
					delete={props.delete}
				></Document>
			);
		});
	});
	const style = {
		padding: "10px 0 0 10px",
		display: "flex",
		flexWrap: "wrap",
		flexDirection: "column",
		justifyContent: "center",
		width: "100%",
	};
	return (
		<div style={style} className={classes.DocumentsContainer}>
			<div className={classes.TableHeadings}>
				<div className={classes.HeadingName}>Name</div>
				<div className={classes.HeadingDate}>Date</div>
			</div>
			{props.loaded ? docs : null}
		</div>
	);
};

export default Documents;
