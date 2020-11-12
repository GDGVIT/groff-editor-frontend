import React, { Component } from "react";
import classes from "./navbar.module.css";
import logo from "../../assets/Logo.png";
// import back from "../../assets/Back.png";
import search from "../../assets/Search_Icon.svg";
import Dropdown from "./DropDown/dropDown";
import MyContext from "../../context/MyContext";
import HelpMenu from "../../components/HelpPopup";

class Navbar extends Component {
	static contextType = MyContext;
	state = {
		Dropdown: false,
		Rename: false,
		showHelp: false,
	};
	constructor(props) {
		super(props);
		this.ContextButton = React.createRef();
		this.docName = React.createRef();
		this.closePopup = this.closePopup.bind(this);
	}
	componentDidMount = () => {
		document.addEventListener("click", this._onPageClick);
	};
	componentWillUnmount = () => {
		document.removeEventListener("click", this._onPageClick);
	};

	renameHandler = (e) => {
		this.props.Rename(e.target.value);
	};

	_onPageClick = (e) => {
		e.stopPropagation();
		if (e.target.id !== "Rename") {
			this.setState({ ...this.state, Rename: false });
		}
		if (
			this.ContextButton.current !== e.target &&
			e.target.id !== "DarkMode" &&
			e.target.id !== "Logout"
		) {
			this.setState({ Dropdown: false });
		} else if (e.target.id === "Logout") {
			this.props.logout();
		}
	};
	backButtonHandler = () => {
		this.props.history.goBack();
	};
	helpPopup = (e) => {
		console.log("yelp");
		this.setState({ showHelp: !this.state.showHelp });
	};
	closePopup = () => {
		this.setState({ showHelp: !this.state.showHelp });
	};
	render() {
		const { ContextMutator } = this.context;

		return (
			<div id="nav">
				{this.state.showHelp ? (
					<div className="HelpPopup">
						<div className="HelpBG">
							<HelpMenu
								close="true"
								closePopup={this.closePopup}
							/>
						</div>
					</div>
				) : null}
				{!this.props.home ? (
					<div
						className={classes.Navbar}
						style={{ position: "absolute" }}
					>
						<div
							className={classes.BackButtonContainer}
							onClick={() => this.props.back()}
						>
							<i className="fa fa-chevron-left"></i>
							{/* <img
								className={classes.BackButton}
								src={back}
								alt="Back Button"
							/> */}
						</div>
						<input
							type="text"
							value={this.props.filename}
							ref={this.docName}
							className={classes.DocumentName}
							onClick={() => {
								this.setState({ Rename: true });
							}}
							onChange={(e) => {
								this.props.Rename(e);
							}}
							/* onKeyPress={(e) => { */
							/* 	this.renameHandler(e); */
							/* }} */
						/>
						<div className={classes.Saved}>
							{this.props.saved ? <p>Saving ... </p>: <p>Saved!</p>}	
						</div>
						<button
							className={classes.ExportButton}
							onClick={this.props.toPdf}
						>
							Export to pdf
						</button>
						<div
							onClick={this.helpPopup}
							style={{ padding: 10, marginRight: 10, cursor:"pointer" }}
						>
							<i class="fa fa-question" aria-hidden="true"></i>
						</div>
						<div
							className={classes.Settings}
							onClick={() => {
								this.setState({
									Dropdown: !this.state.Dropdown,
								});
							}}
						>
							<img
								src={logo}
								alt="Fforg Logo"
								className={classes.logo}
								ref={this.ContextButton}
							></img>
						</div>
					</div>
				) : (
					<div className={classes.Navbar}>
						<div className={classes.Heading} id="navheading">
							Documents
						</div>
						<div className={classes.searchBox}>
							<div className={classes.searchIcon}>
								<img
									src={search}
									alt="Search Icon"
									className={classes.searchImage}
								/>
							</div>
							<input
								className={classes.searchText}
								type="text"
								placeholder="Search Documents"
								onChange={this.props.search}
								label="Search Documents"
								id="navsearch"
							/>
						</div>
						<div
							className={classes.SettingsMargin}
							onClick={() => {
								this.setState({
									Dropdown: !this.state.Dropdown,
								});
							}}
						>
							<img
								src={logo}
								alt="Fforg Logo"
								className={classes.logo}
								ref={this.ContextButton}
							></img>
						</div>
					</div>
				)}
				{this.state.Dropdown ? (
					<Dropdown
						onclick={(e) => ContextMutator(e.target.id)}
					></Dropdown>
				) : null}
			</div>
		);
	}
}
export default Navbar;
