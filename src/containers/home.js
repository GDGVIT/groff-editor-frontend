import React, { Component } from "react";
import Navbar from "../components/Navbar/navbar";
import Documents from "../components/Documents/documents";

class Home extends Component {
	state = {
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
				name: "Letter of Recomendation",
				id: "doc3",
				time: "A week Ago",
			},
		],
	};
	render() {
		return (
			<div>
				<Navbar home={true}>Documents</Navbar>
				<div className="home">
					<Documents documents={this.state.documents}></Documents>
				</div>
			</div>
		);
	}
}
export default Home;
