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
		this.apiUrl = options.apiUrl;
		this.token = localStorage.getItem("token");
		this.userId = localStorage.getItem("user-id");
		this.fileId = this.props.match.params.doc;
		this.state = {
			timestamp: "no timestamp yet",
			Document: {
				fileName: "not found",
				fileData: "fasd",
			},
			InitData: "Im actually just testing",
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
		if (
			!localStorage.getItem("token") &&
			localStorage.getItem("Guest") === false
		) {
			this.props.history.push("/");
		}
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
		console.log("why")
	this.guest = localStorage.getItem("Guest");
	if(this.guest !== "Yes"){
		fetch(this.apiUrl + "preview/getFile?fileId=" + this.fileId, {
			method: "get",
			headers: {
				Authorization: this.token,
				"Content-Type": "application/json",
			},
		})
			.then((data) => {
				if (data.status === 200) {
					return data.json();
				} else {
					let data = [
						{
							fileName: "File was not found",
							fileData: "File was not found",
							_id: "NAN",
							fileId: "NAN",
						},
					];
					return data;
				}
			})
			.then((data) => {
				let newdata = data;
				const file = newdata[0];
				console.log("File from editor,", file);
				this.setState({
					Loaded: true,
					Document: file,
					InitData: file.fileData,
				});
			});
		} else{
			console.log("GuestDoc")
					let file = {
							fileName: "NewDoc",
							fileData: "NewDoc",
							_id: "newDoc",
							fileId: "newDoc",
						};
				this.setState({
					Loaded: true,
					Document: file,
					InitData: file.fileData,
				});

		}
		window.addEventListener("keypress", this.showHelp);
		// let CurrentDoc = this.context.documents.find((doc) => {
		// 	return doc.fileId === this.fileId;
		// });
		// let backupDoc = {
		// 	fileName: "not Found",
		// 	fileData: "The file was not found 404",
		// };
		// CurrentDoc = CurrentDoc ? CurrentDoc : backupDoc;
		// this.setState({
		// 	Document: CurrentDoc,
		// 	InitData: CurrentDoc.fileData,
		// });
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

	showHelp = (e) => {
		if ((e.key === "?") & (e.target.className !== "ace_text-input")) {
			console.log("What are you dong stepWindow");
			this.setState({ showHelp: !this.state.showHelp });
		}
	};
	pdfConvert = () => {
		fetch(options.apiUrl + "preview/download", {
			method: "GET",
			headers: {
				Authorization: this.token,
				"Content-Type": "application/pdf",
			},
		}).then((response) => {
			if (response.status === 200) {
				response.blob().then((result)=> {
				var url = URL.createObjectURL(result);
				var a = document.createElement("a");
				a.href = url;
				a.download = "filename.pdf";
				document.body.appendChild(a);
				a.click();
				a.remove();
				});
			} else {
				console.log(response);
			}
		});
	};

	handleback = () => {
		this.props.history.goBack();
	};

	handleLogout = () => {
		localStorage.clear();
		this.context.Logout();
		this.props.history.push("/");
	};

	handleRename = (e) => {
		// e.persist();
		console.log(e);
		this.setState({ Document: { FileName: e.target.value } });
		this.context.RenameHandler(this.fileId, e.target.value);
		// BackendIntegration : Rename Call here
	};

	handleCode = (value) => {
		// this.docData = value;
		// this.docData = this.docData.replace(/"/g, '\\"');
		this.setState({
			Modified: true,
			Loaded: false,
			Output: {
				...this.state.Output,
				data: value,
			},
		});
	};

	loadingAnimStop = () => {
		this.setState({
			Loaded: true,
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
							style={{overflowX:"hidden",overflowY:"hidden"}}
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
									data={this.state.InitData}
								></CodeEditor>
							</div>
							<div
								className="PreviewContainer"
								ref={this.preview}
								style={{overflowX:"hidden",overflowY:"scroll"}}
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
											loadingAnimStop={
												this.loadingAnimStop
											}
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
										data={this.state.InitData}
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
											loadingAnimStop={
												this.loadingAnimStop
											}
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
