import React from "react";
import SplitPane from "react-split-pane";
import "./editor.css";
import { Tabs } from "antd";
// import Pdf from "react-to-pdf";
import Navbar from "../components/Navbar/navbar";
import CodeEditor from "../components/CodeEditor/codeEditor";
import DocPreview from "../components/DocPreview/docPreview";
import MyContext from "../context/MyContext";
import HelpMenu from "../components/HelpPopup";
import Loader from "../assets/Loader.svg";

import { useTheme } from "../context/ThemeContext";

import options from "../options";
import socketIOClient from "socket.io-client";

const client = socketIOClient(options.wssUrl, {
	transports: ["websocket"],
	path: "/api/socket.io",
});

const { TabPane } = Tabs;
// const themeToggle = useTheme();
// const ref = React.createRef();

// Backend Integration : Route to rename document on change (Might have to introduce commit function when focus changed from input to minimize backend calls)
// Backend Integration : Route to fetch Document Data directly from Backend based on url param instead of context Api to limit app re render events.

class Editor extends React.Component {
	static contextType = MyContext;
	constructor(props) {
		super(props);
		this.token = localStorage.getItem("token");
		this.userId = localStorage.getItem("user-id");
		this.fileId = this.props.match.params.doc;
		this.state = {
			timestamp: "no timestamp yet",
			Document: {
				fileName: "not found",
				fileData: "testing",
			},
			Modified: false,
			Loaded: false,
			theme: "monokai",
			windowWidth: window.innerWidth,
			windowHeight: window.innerHeight - 50,
			showHelp: false,
			preview: true,
			op: "",
			Output: {
				token: this.token,
				user_id: this.userId,
				fileId: this.fileId,
				data: "",
			},
		};
		this.preview = React.createRef();
	}

	handleResize = (e) => {
		this.setState({
			windowWidth: window.innerWidth,
		});
		if (this.preview.current) {
			this.setState({
				previewWidth: this.preview.current.offsetWidth,
			});
		}
	};
	componentDidMount = () => {
		if(!localStorage.getItem('token') && localStorage.getItem('Guest') == false){
			this.props.history.push("/");
		}
		const showHelp = (e) => {
			if ((e.key === "?") & (e.target.className !== "ace_text-input")) {
				console.log("What are you dong stepWindow");
				this.setState({ showHelp: !this.state.showHelp });
			}
		};
		window.addEventListener("keypress", showHelp);
		let CurrentDoc = this.context.documents.find((doc) => {
			return doc._id === this.fileId;
		});
		let backupDoc = {
			fileName: "not Found",
			fileData: "The file was not found 404",
		};
		CurrentDoc = CurrentDoc ? CurrentDoc : backupDoc;
		this.setState({
			Document: CurrentDoc,
			Loaded: true,
		});
		this.update = setInterval(() => {
			if (this.state.Modified) {
				console.log(JSON.stringify(this.state.Output));
				client.emit("cmd", JSON.stringify(this.state.Output));
				this.setState({ Modified: false });
			}
		}, 2000);
		client.on("cmd", (response) => {
			this.setState({ op: response });
		});
		window.addEventListener("resize", this.handleResize);
	};

	componentDidUpdate = () => {
		window.addEventListener("resize", this.handleResize);
	};
	componentWillUnmount() {
		clearInterval(this.update);
	}

	pdfConvert = () => {
		fetch(options.apiUrl + "preview/download", {
			method: "GET",
			headers: {
				Authorization: this.token,
			},
		}).then((response) => {
			if (response.status === 200) {
				let blob = response.blob();
				var url = window.URL.createObjectURL(blob);
				var a = document.createElement("a");
				a.href = url;
				a.download = "filename.pdf";
				document.body.appendChild(a);
				a.click();
				a.remove();
			} else {
				console.log(response);
			}
		});
	};

	handleback = () => {
		this.props.history.goBack();
	};

	handleLogout = () => {
		this.props.history.push("/");
		localStorage.clear();
		this.context.Logout();
	};

	handleRename = (e) => {
		this.setState({ Document: { name: e.target.value } });
		// BackendIntegration : Rename Call here
	};

	handleCode = (value) => {
		console.log("Handle Code Called");
		this.docData = value;
		this.docData = this.docData.replace(/"/g, '\\"');
		this.setState({
			Modified: true,
			Output: {
				...this.state.Output,
				data: this.docData,
			},
		});
	};

	TabSwitch = () => {
		this.setState({
			preview: !this.state.preview,
		});
		this.handleResize();
	};

	render() {
		let small = 768;
		return (
			<div className="EditorBackground">
				<Navbar
					back={this.handleback}
					logout={this.handleLogout}
					Rename={this.handleRename}
					toPrint={this.preview}
					filename={this.state.Document.fileName}
					toPdf={this.pdfConvert}
				></Navbar>

				<div className="DocumentContainer">
					{this.state.showHelp ? (
						<div className="HelpPopup">
							<div className="HelpBG">
								<HelpMenu />
							</div>
						</div>
					) : null}
					{this.state.windowWidth > small ? (
						<SplitPane
							split="vertical"
							primary="second"
							minSize={this.state.windowWidth / 2}
						>
							<div
								style={{
									padding: "20px",
									height: "100%",
								}}
							>
								<CodeEditor
									codeStream={this.handleCode}
									theme={this.state.theme}
									data={this.state.Document.fileData}
								></CodeEditor>
							</div>
							<div
								className="PreviewContainer"
								ref={this.preview}
							>
								{this.state.Modified ? (
									<div className="loader">
										<img
											src={Loader}
											alt="LoaderIcon"
											className="LoaderIcon"
										/>
										<span className="LoaderText">
											Loading..
										</span>
									</div>
								) : (
									<div
										className="DocPreview"
										ref={this.preview}
									>
										<DocPreview
											ElWidth={this.state.previewWidth}
										>
											{this.state.op}
										</DocPreview>
									</div>
								)}
							</div>
						</SplitPane>
					) : (
						<Tabs activeKey={this.state.preview ? "1" : "2"}>
							<TabPane key="1">
								<div
									style={{
										height: this.state.windowHeight,
										marginTop: "10px",
									}}
								>
									<CodeEditor
										codeStream={this.handleCode}
										theme={this.state.theme}
										data={this.state.Document.fileData}
									></CodeEditor>
									<button
										className="tabButton"
										onClick={() => {
											this.TabSwitch();
										}}
									>
										Preview &#10095;
									</button>
								</div>
							</TabPane>
							<TabPane key="2">
								{this.state.Modified ? (
									<div className="loader">
										<img
											src={Loader}
											alt="LoaderIcon"
											className="LoaderIcon"
										/>
										<span className="LoaderText">
											Loading..
										</span>
									</div>
								) : (
									<div
										className="DocPreview"
										ref={this.preview}
									>
										<DocPreview
											ElWidth={this.state.previewWidth}
										>
											{this.state.op}
										</DocPreview>
										<button
											className="tabButton"
											onClick={() => {
												this.TabSwitch();
											}}
										>
											&#10094; Code
										</button>
									</div>
								)}
							</TabPane>
						</Tabs>
					)}
				</div>
			</div>
		);
	}
}
export default Editor;
