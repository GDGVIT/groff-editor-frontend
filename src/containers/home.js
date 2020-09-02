import React, { Component } from "react";
import Navbar from "../components/Navbar/navbar";
import Documents from "../components/Documents/documents";
import MyContext from "../context/MyContext";

// Optimization: Add Function under ComponentDidMount to update Context State to latest Database Values by calling A Context Child Function

class Home extends Component {
	static contextType = MyContext;
	ComponentDidMount = () => {
		this.context.LoadAllDocuments();
	};
	handleLogout = () => {
		this.props.history.push("/");
		this.context.Logout();
	};
	handleSearch = (e) => {
		console.log(e.target.value);
		// BackendIntegration: Add Search Route here
	};
	render() {
		return (
			<div>
				<Navbar
					home={true}
					logout={this.handleLogout}
					search={this.handleSearch}
				>
					Documents
				</Navbar>
				<div className="home">
					{this.context.loaded ? (
						<Documents
							documents={this.context.documents}
						></Documents>
					) : null}
				</div>
			</div>
		);
	}
}
export default Home;
