import React, { Component } from "react";
import Navbar from "../components/Navbar/navbar";
import Documents from "../components/Documents/documents";
import MyContext from "../context/MyContext";

// Optimization: Add Function under ComponentDidMount to update Context State to latest Database Values by calling A Context Child Function

class Home extends Component {
	static contextType = MyContext;
	componentDidMount = () => {
		this.context.LoadAllDocuments();
	};
	handleLogout = () => {
		this.props.history.push("/");
		this.context.Logout();
	};
	handleSearch = (e) => {};
	componentWillUnmount() {
		clearInterval(this.update);
	}
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
					<Documents
						documents={this.context.documents}
						loaded={this.context.loaded}
					></Documents>
				</div>
			</div>
		);
	}
}
export default Home;
