import React, { Component } from "react";
import Navbar from "../components/Navbar/navbar";
import Documents from "../components/Documents/documents";
import MyContext from "../context/MyContext";
import Loader from "../assets/Loader.svg";

// Optimization: Add Function under ComponentDidMount to update Context State to latest Database Values by calling A Context Child Function

class Home extends Component {
	static contextType = MyContext;
	componentDidMount = () => {
		if (
			!localStorage.getItem("token") &&
			localStorage.getItem("Guest") === false
		) {
			this.props.history.push("/");
		}
		this.context.LoadAllDocuments();
	};
	handleLogout = () => {
		this.context.Logout();
		localStorage.clear();
		this.props.history.push("/");
	};
	handleSearch = (e) => {
		this.context.SearchHandler(e.target.value);
	};
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
				<div className="home" id="home">
					<Documents
						documents={this.context.documents}
						delete={this.context.DeleteDocumentHandler}
						loaded={this.context.loaded}
					></Documents>
				</div>
				{!this.context.loaded ? (
					<div className="loader">
						<img
							src={Loader}
							alt="LoaderIcon"
							className="LoaderIcon"
						/>
						<span className="LoaderText">Loading..</span>
					</div>
				) : null}
			</div>
		);
	}
}
export default Home;
