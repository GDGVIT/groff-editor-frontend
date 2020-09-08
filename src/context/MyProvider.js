import MyContext from "./MyContext";
import React, { Component } from "react";

// Backend Integration: Add route to fetch all documents(Name , Created Time, Id)
// Optimization: Add Fucntion to refresh database

class MyProvider extends Component {
	constructor(props) {
		super(props);
		this.token = localStorage.getItem("token");
		this.userId = localStorage.getItem("user-id");
		// this.apiUrl = "https://groffapi.dscvit.com/";
		this.apiUrl = "http://localhost:3000/";
	}
	state = {
		LoggedIn: false,
		Loaded: false,
		DarkMode: false,
		documents: [
			{
				name: "Document1",
				id: "doc1",
				time: "12 Hours Ago",
			},
			{
				name: "Resume for Job",
				id: "doc2",
				time: "Yesterday",
			},
			{
				name: "Letter of Recommendation",
				id: "doc3",
				time: "A week Ago",
			},
		],
	};
	ContextMutator = (e) => {
		if (e === "DarkMode") this.setState({ DarkMode: !this.state.DarkMode });
	};
	LoadAllDocuments = () => {
		if (!this.state.Loaded) {
			fetch(this.apiUrl + "preview/" + this.userId, {
				method: "get",
				headers: {
					Authorization: this.token,
				},
			})
				.then((data) => data.json())
				.then((data) => {
					const files = data.searches[0].files.filter((file) => file);
					console.log("File,", data);
					this.setState({
						Loaded: true,
						documents: [...files],
					});
				});
		}
	};
	NewDocumentHandler = () => {
		let newId = this.state.documents.length + 1;
		let NewDocument = {
			fileName: "new" + newId,
			id: "doc" + newId,
			time: "Just now",
		};
		// let token =
		// 	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphbmVkb2VAZXhhbXBsZS5jb20iLCJ1c2VySWQiOiI1ZjQ3NWIyZTBkODUwODMxOGMxY2MzNGQiLCJpYXQiOjE1OTg3MDc5NTcsImV4cCI6MTU5ODcxMTU1N30.MgkEtavHHsFkivSJ9tnFuvLriQ2L0Z72DCa9AHHPMZQ";
		// let userID = "5f474666872d6a141f53da20";
		// const apiUrl =
		// 	"https://groffapi.dscvit.com/preview/createFile/" + userID;
		fetch(this.apiUrl + "preview/createFile/" + this.userId, {
			method: "PATCH",
			headers: {
				Authorization: this.token,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				fileName: "new" + newId,
			}),
		})
			.then((data) => data.json())
			.then((data) => console.log("This is your data", data));
		this.setState({ documents: [...this.state.documents, NewDocument] });
		return NewDocument.fileName;
	};
	LogoutHandler = () => {
		console.log("Logged out");
	};
	render() {
		return (
			<MyContext.Provider
				value={{
					DarkMode: this.state.DarkMode,
					ViMode: this.state.ViMode,
					ContextMutator: this.ContextMutator,
					NewDocumentHandler: () => this.NewDocumentHandler(),
					documents: this.state.documents,
					Logout: () => this.LogoutHandler(),
					LoadAllDocuments: () => this.LoadAllDocuments(),
					loaded: this.state.Loaded,
				}}
			>
				{this.props.children}
			</MyContext.Provider>
		);
	}
}

export default MyProvider;
