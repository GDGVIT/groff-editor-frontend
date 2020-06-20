import React, { Component } from "react";
import Navbar from "../components/Navbar/navbar";

class Home extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Navbar home={true}>Documents</Navbar>
			</div>
		);
	}
}
export default Home;
