import React from "react";
import Ace from "react-ace";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-nord_dark";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-solarized_light";
import CustomGroffMode from "../../ace-settings/mode-groff";
import classes from "./dropDown_editor.module.css";
import SettingsIcon from "../../assets/Settigns.png";

const AceStyle = {
	width: "100%",
	height: "100%",
};
class CodeEditor extends React.Component {
	constructor(props) {
		super(props);
		this.aceEditor = React.createRef();
	}
	state = {
		theme: "monokai",
	};
	componentDidMount = () => {
		const customMode = new CustomGroffMode();
		this.aceEditor.current.editor.getSession().setMode(customMode);
		console.log("Hey");
		if (this.props.data.length !== 0) {
			// aceEditor.current.editor.setValue(props.data, -1);
		}
	};
	themeSelector = (e) => {
		this.setState({ theme: e.target.value });
	};

	render() {
		return (
			<div style={{ height: "100%", width: "100%" }}>
				<div className={classes.EditorSettings}>
					<img src={SettingsIcon} alt="Editor settings Icon" />
					<div className={classes.EditorDropdown}>
						<div className={classes.Triangle_up}></div>
						<div className={classes.Dropdown}>
							<div
								className={classes.itemcontainer}
								id="DarkMode"
							>
								<div className={classes.DropItem} id="DarkMode">
									Change Theme:
									<select
										name="theme"
										label="theme select"
										id="theme"
										onChange={(e) => this.themeSelector(e)}
										placeholder="Select a theme"
										className="EditorDropdown"
									>
										<option value="monokai">Monokai</option>
										<option value="nord_dark">Nord</option>
										<option value="solarized_light">
											Solarized Light
										</option>
										<option value="solarized_dark">
											Solarized Dark
										</option>
										<option value="github">Github</option>
									</select>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Ace
					ref={this.aceEditor}
					onChange={this.props.codeStream}
					style={AceStyle}
					theme={this.state.theme}
				></Ace>
			</div>
		);
	}
}
export default CodeEditor;
