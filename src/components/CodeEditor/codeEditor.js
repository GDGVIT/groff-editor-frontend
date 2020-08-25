import React from "react";
import Ace from "react-ace";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-nord_dark";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-solarized_light";

const AceStyle = {
	width: "100%",
	height: "100%",
};
const CodeEditor = (props) => {
	return (
		<Ace
			onChange={props.codeStream}
			style={AceStyle}
			theme={props.theme}
		></Ace>
	);
};
export default CodeEditor;
