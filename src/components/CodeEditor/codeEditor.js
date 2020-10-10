import React from "react";
import Ace from "react-ace";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-nord_dark";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-solarized_light";
import "ace-builds/src-noconflict/keybinding-vim";
import "ace-builds/src-noconflict/keybinding-vscode";
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
		FontSize: 12,
		VImode: true,
		FontFamily: "Courier New",
	};
	componentDidMount = () => {
		const customMode = new CustomGroffMode();
		this.aceEditor.current.editor.getSession().setMode(customMode);
		console.log(this.aceEditor.current.value);
		if (this.props.data.length !== 0) {
			// aceEditor.current.editor.setValue(props.data, -1);
		}
	};
	themeSelector = (e) => {
		this.setState({ theme: e.target.value });
	};
	fontsizeSelector = (e) => {
		this.setState({ FontSize: parseInt(e.target.value) });
	};
	fontstyleSelector = (e) => {
		this.setState({ FontFamily: e.target.value });
	};
	modeToggle = () => {
		console.log("I was called");
		this.setState({ VImode: !this.state.VImode });
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
							<div
								className={classes.itemcontainer}
								id="DarkMode"
							>
								<div className={classes.DropItem} id="DarkMode">
									Font Size:
									<input
										type="text"
										value={this.state.FontSize}
										onChange={(e) =>
											this.fontsizeSelector(e)
										}
									/>
								</div>
							</div>
							<div
								className={classes.itemcontainer}
								id="DarkMode"
							>
								<div className={classes.DropItem} id="DarkMode">
									Change Font:
									<select
										name="font"
										label="font select"
										id="font"
										onChange={(e) =>
											this.fontstyleSelector(e)
										}
										placeholder="Select a font"
										className="EditorDropdown"
									>
										<option value="Courier New">
											Courier New
										</option>
										<option value="Lucida Console">
											Lucida Console
										</option>
									</select>
								</div>
							</div>
							<div
								className={classes.itemcontainer}
								id="DarkMode"
								onClick={() => this.modeToggle()}
							>
								<div className={classes.DropItem} id="DarkMode">
									Vi Mode
								</div>
								<div
									id="DarkMode"
									className={
										this.state.VImode
											? classes.ToggleActive
											: classes.Toggle
									}
								>
									<div
										id="DarkMode"
										className={
											this.state.VImode
												? classes.ToggleSwitchActive
												: classes.ToggleSwitch
										}
									></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Ace
					ref={this.aceEditor}
					onChange={this.props.codeStream}
					style={AceStyle}
					mode="java"
					keyboardHandler={this.state.VImode ? "vim" : "vscode"}
					// fontSize={this.state.fontSize}
					setOptions={{
						fontSize:
							this.state.FontSize > 0 ? this.state.FontSize : 1,
						fontFamily: this.state.FontFamily,
					}}
					theme={this.state.theme}
				></Ace>
			</div>
		);
	}
}
export default CodeEditor;
