import React, { Component } from "react";
import Navbar from "../components/Navbar/navbar";
import Documents from "../components/Documents/documents";
import MyContext from "../context/MyContext";

class Home extends Component {
	static contextType = MyContext;
	render() {
		return (
			<div>
				<Navbar home={true}>Documents</Navbar>
				<div className="home">
					<Documents documents={this.context.documents}></Documents>
				</div>
			</div>
		);
	}
}
export default Home;
