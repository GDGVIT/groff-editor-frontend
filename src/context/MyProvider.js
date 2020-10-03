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
		],
	};
	backup = {};
	ContextMutator = (e) => {
		if (e === "DarkMode") this.setState({ DarkMode: !this.state.DarkMode });
	};
	LoadAllDocuments = () => {
		if (!this.state.Loaded) {
			fetch(this.apiUrl + "preview/" + this.userId, {
				method: "GET",
				headers: {
					Authorization: "Bearer " + this.token,
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
					this.backup = [...files];
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
		fetch(this.apiUrl + "preview/createFile/" + this.userId, {
			method: "PATCH",
			headers: {
				Authorization: this.token,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				fileName: "newlol" + newId,
			}),
		})
			.then((data) => data.json())
			.then((data) => console.log("This is your data", data));
		this.setState({ documents: [...this.state.documents, NewDocument] });
		return NewDocument.fileName;
	};
	DeleteDocumentHandler = (filename) => {
		fetch(this.apiUrl + "preview/" + this.userId + "/" + filename, {
			method: "DELETE",
			headers: {
				Authorization: "Bearer " + this.token,
			},
		}).then((res) => {
			this.setState({
				Loaded: false,
			});
			this.LoadAllDocuments();
			console.log("filename", filename, res.status);
		});
	};
	LogoutHandler = () => {
		console.log("Logged out");
	};
	SerachHandler = (querry) => {
		if (querry) {
			try {
				let filtered = this.state.documents.filter((name) =>
					name.fileName.includes(querry)
				);
				console.log(querry);
				this.setState({
					documents: [...filtered],
				});
			} catch {}
		} else {
			this.setState({
				documents: [...this.backup],
			});
		}
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
					DeleteDocumentHandler: (filename) =>
						this.DeleteDocumentHandler(filename),
					loaded: this.state.Loaded,
					SearchHandler: (value) => this.SerachHandler(value),
				}}
			>
				{this.props.children}
			</MyContext.Provider>
		);
	}
}

export default MyProvider;
