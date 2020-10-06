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
						onClick={() => {
							context.NewDocumentHandler();
							// .then((newId) => {
							// console.log(newId);
							// History.push("/editor/" + newId);
							// });
						}}
					>
						<img
							className={classes.AddIcon}
							src={AddIcon}
							alt="Add	Document Icon"
						></img>
					</div>
				);
			}}
		</MyContext.Consumer>
	);
};
export default NewDocument;
