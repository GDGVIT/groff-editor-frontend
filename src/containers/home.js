import React, { Component } from "react";
import Navbar from "../components/Navbar/navbar";
import Documents from "../components/Documents/documents";
import TemplateDocuments from "../components/Documents/templateDocuments";
import MyContext from "../context/MyContext";
import Loader from "../assets/Loader.svg";

class Home extends Component {
	static contextType = MyContext;
	componentDidMount = () => {
		this.context.LoadAllDocuments();
		if (
			!localStorage.getItem("token")
			// &&
			// localStorage.getItem("Guest") === false
		) {
			this.props.history.push("/");
		}
	};
	handleLogout = () => {
		console.log('LOGOUTTTTTTTTTTTTT')
		this.context.Logout();
		localStorage.removeItem("user-id");
		localStorage.removeItem("token");
		localStorage.removeItem("Guest");
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
					<TemplateDocuments />
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
