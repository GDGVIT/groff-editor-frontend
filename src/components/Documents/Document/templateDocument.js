import React from "react";
import classes from "./document.module.css";
import MyContext from "../../../context/MyContext";
import { useHistory } from "react-router-dom";

const TemplateDocument = (props) => {
	let History = useHistory();
	console.log("CONTENTTT", props.title);
	return (
		<MyContext.Consumer>
			{(context) => {
				return (
					<div
						className={classes.NewDocumentContainer}
						onClick={async () => {
							const newId = await context.TDocumentHandler(
								props.content,
								props.title
							);
							History.push("/editor/" + newId);
						}}
						id="templatedocument"
					>
						<div
							className={classes.DocumentPreview}
							style={{
								backgroundImage: "url(" + props.bgImg + ")",
							}}
						></div>
						<div className={classes.DocumentDetails} id="docdeets">
							<div className={classes.tooltip}>
								<div className={classes.DocumentName}>
									{props.heading}
								</div>
								<span className={classes.tooltiptext}>
									{props.heading}
								</span>
							</div>
						</div>
					</div>
				);
			}}
		</MyContext.Consumer>
	);
};
export default TemplateDocument;
