import React, { useEffect } from "react";
import Ace from "react-ace";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-nord_dark";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-solarized_light";
import CustomGroffMode from "../../ace-settings/mode-groff";

const AceStyle = {
	width: "100%",
	height: "100%",
};
const CodeEditor = (props) => {
	let aceEditor = React.createRef();
	useEffect(() => {
		const customMode = new CustomGroffMode();
		aceEditor.current.editor.getSession().setMode(customMode);
	});

	return (
		<Ace
			ref={aceEditor}
			onChange={props.codeStream}
			style={AceStyle}
			theme={props.theme}
		></Ace>
	);
};
export default CodeEditor;
