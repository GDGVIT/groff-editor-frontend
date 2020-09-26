import React, { Component } from "react";
import classes from "./navbar.module.css";
import logo from "../../assets/Logo.png";
import back from "../../assets/Back.png";
import search from "../../assets/Search_Icon.svg";
import Dropdown from "./DropDown/dropDown";
import MyContext from "../../context/MyContext";
import ReactToPdf from "react-to-pdf";

class Navbar extends Component {
	static contextType = MyContext;
	state = {
		Dropdown: false,
		Rename: false,
	};
	constructor(props) {
		super(props);
		this.ContextButton = React.createRef();
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
	render() {
		const { ContextMutator } = this.context;

		return (
			<div>
				{!this.props.home ? (
					<div
						className={classes.Navbar}
						style={{ position: "absolute" }}
					>
						<div
							className={classes.BackButtonContainer}
							onClick={() => this.props.back()}
						>
							<img
								className={classes.BackButton}
								src={back}
								alt="Back Button"
							/>
						</div>
						<input
							type="text"
							value={this.props.filename}
							className={classes.DocumentName}
							onClick={() => {
								this.setState({ Rename: true });
							}}
							onChange={(e) => this.props.Rename(e)}
							onKeyPress={(e) => {
								this.renameHandler(e);
							}}
						/>
						<ReactToPdf
							targetRef={this.props.toPrint}
							filename={this.props.children + ".pdf"}
						>
							{({ toPdf }) => (
								<button
									className={classes.ExportButton}
									onClick={toPdf}
								>
									Export to pdf
								</button>
							)}
						</ReactToPdf>

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
						<div className={classes.Heading}>Documents</div>
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
