import MyContext from "./MyContext";
import React, { Component } from "react";

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
	render() {
		return (
			<MyContext.Provider
				value={{
					DarkMode: this.state.DarkMode,
					ViMode: this.state.ViMode,
					ContextMutator: this.ContextMutator,
					documents: this.state.documents,
				}}
			>
				{this.props.children}
			</MyContext.Provider>
		);
	}
}

export default MyProvider;
