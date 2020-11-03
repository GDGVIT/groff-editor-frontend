import React from "react";
import classes from "./screenshotPane.module.css";
import Screenshot1 from "../assets/ScreenShot 1.png";
import Screenshot2 from "../assets/Screenshot 2.png";
import Screenshot3 from "../assets/Screenshot 3.png";
import Screenshot4 from "../assets/Darkmode.gif";
import MobileScreenshot1 from "../assets/Mobile Screenshot 1.png";
import MobileScreenshot2 from "../assets/Mobile Screenshot 2.png";
import MobileScreenshot3 from "../assets/Mobile Screenshot 3.png";

class screenshotPane extends React.Component {
	state = {
		curImgIndex: 2,
		DisplayArray: [
			{
				curImg: Screenshot1,
				curText: "See Live Groff Preview as you type your code",
			},
			{
				curImg: Screenshot2,
				curText: "Cloud storage for all your documents",
			},
			{
				curImg: Screenshot4,
				curText: "Dark Mode for easy night viewing",
			},
			{
				curImg: Screenshot3,
				curText: "Templates to help you get started",
			},
		],
	};

	componentDidMount = () => {
		setInterval(() => {
			this.NextImg();
		}, 5000);
		console.log("THis widht", window.innerWidth);
		if (window.innerWidth < 769) {
			this.setState({
				curImgIndex: 2,
				DisplayArray: [
					{
						curImg: MobileScreenshot1,
						curText: "See Live Groff Preview as you type your code",
					},
					{
						curImg: MobileScreenshot2,
						curText: "See Live Groff Preview as you type your code",
					},
					{
						curImg: MobileScreenshot3,
						curText: "See Live Groff Preview as you type your code",
					},
					{
						curImg: MobileScreenshot2,
						curText: "See Live Groff Preview as you type your code",
					},
				],
			});
		}
	};

	NextImg = () => {
		if (this.state.curImgIndex < 3) {
			const updatedImg = this.state.curImgIndex + 1;
			this.setState({ curImgIndex: updatedImg });
		} else {
			this.setState({ curImgIndex: 0 });
		}
	};
	PrevImg = () => {
		if (this.state.curImgIndex > 0) {
			const updatedImg = this.state.curImgIndex - 1;
			this.setState({ curImgIndex: updatedImg });
		} else {
			this.setState({ curImgIndex: 3 });
		}
	};
	render() {
		return (
			<div className={classes.screenshotPane}>
				<div className={classes.prev} onClick={() => this.PrevImg()}>
					&#10094;
				</div>
				<div className={classes.next} onClick={() => this.NextImg()}>
					&#10095;
				</div>
				<div className={classes.MainContainer}>
					<div className={classes.slideshowContainer}>
						<div className={classes.mySlides}>
							<img
								src={
									this.state.DisplayArray[
										this.state.curImgIndex
									].curImg
								}
								style={{ maxWidth: "100%" }}
								alt="Showcase"
							/>
						</div>
					</div>
					<div className={classes.text}>
						{
							this.state.DisplayArray[this.state.curImgIndex]
								.curText
						}
					</div>
				</div>
			</div>
		);
	}
}

export default screenshotPane;
