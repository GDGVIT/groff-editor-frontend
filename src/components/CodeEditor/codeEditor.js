import React from "react";
import Ace from "react-ace";

const AceStyle = {
	width: "100%",
	height: "100%",
};
const CodeEditor = (props) => {
	return (
		<div style={{ padding: "20px", height: "100%" }}>
			<Ace onChange={props.codeStream} style={AceStyle}></Ace>
		</div>
	);
};
export default CodeEditor;
