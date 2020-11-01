import React from "react";
import classes from "./document.module.css";
import AddIcon from "../../../assets/AddIcon.png";
import MyContext from "../../../context/MyContext";
import { useHistory } from "react-router-dom";

const NewDocument = (props) => {
	let History = useHistory();
	console.log('CONTENTTT', props.content)
	return (
		<MyContext.Consumer>
			{(context) => {
				return (
					<div
						className={classes.NewDocumentContainer}
						onClick={async () => {
							const newId = await context.NewDocumentHandler(props.content);
							History.push("/editor/" + newId);
						}}
						id="newdocument"
					>
						<img
							className={classes.AddIcon}
							src={AddIcon}
							alt="Add Document Icon"
						></img>
					</div>
				);
			}}
		</MyContext.Consumer>
	);
};
export default NewDocument;
