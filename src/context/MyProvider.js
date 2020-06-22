import MyContext from "./MyContext";
import React, { Component } from "react";
import NewDocument from "../components/Documents/Document/newDocument";

class MyProvider extends Component {
	state = {
		DarkMode: false,
		ViMode: false,
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
				name: "Letter of Recomendation ",
				id: "doc3",
				time: "A week Ago",
			},
		],
	};
	ContextMutator = (e) => {
		if (e === "DarkMode") this.setState({ DarkMode: !this.state.DarkMode });

		if (e === "ViMode") this.setState({ ViMode: !this.state.ViMode });
	};
	NewDocumentHandler = () => {
		let newId = this.state.documents.length + 1;
		let NewDocument = {
			name: "New Document",
			id: "doc" + newId,
			time: "Just now",
		};
		this.setState({ documents: [...this.state.documents, NewDocument] });
		return NewDocument.id;
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
				}}
			>
				{this.props.children}
			</MyContext.Provider>
		);
	}
}

export default MyProvider;
