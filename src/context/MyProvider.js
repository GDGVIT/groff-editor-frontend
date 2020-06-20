import MyContext from "./MyContext";
import React, { Component } from "react";

class MyProvider extends Component {
	state = {
		DarkMode: false,
		ViMode: false,
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
				}}
			>
				{this.props.children}
			</MyContext.Provider>
		);
	}
}

export default MyProvider;
