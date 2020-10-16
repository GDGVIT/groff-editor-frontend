import React from "react";
import classes from "./document.module.css";
import AddIcon from "../../../assets/AddIcon.png";
import MyContext from "../../../context/MyContext";
import { useHistory } from "react-router-dom";

const NewDocument = (props) => {
	let History = useHistory();
	return (
		<MyContext.Consumer>
			{(context) => {
				return (
					<div
						className={classes.NewDocumentContainer}
						onClick={async () => {
							const newId = await context.NewDocumentHandler();
							History.push("/editor/" + newId);
						}}
						id="document"
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
