import MyContext from "./MyContext";
import React, { Component } from "react";

// Backend Integration: Add route to fetch all documents(Name , Created Time, Id)
// Optimization: Add Fucntion to refresh database

class MyProvider extends Component {
	state = {
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
	NewDocumentHandler = () => {
		let newId = this.state.documents.length + 1;
		let NewDocument = {
			name: "New Document",
			id: "doc" + newId,
			time: "Just now",
		};
		let token = localStorage.getItem("AUTHTOKEN");
		let userId = localStorage.getItem("USERID");
		const apiUrl = "https://gorff.tk/" + userId;
		fetch(apiUrl, {
			method: "post",
			headers: new Headers({
				Authorization: token,
			}),
		})
			.then((response) => response.json())
			.then((data) => console.log("This is your data", data));
		this.setState({ documents: [...this.state.documents, NewDocument] });
		return NewDocument.id;
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
				}}
			>
				{this.props.children}
			</MyContext.Provider>
		);
	}
}

export default MyProvider;
