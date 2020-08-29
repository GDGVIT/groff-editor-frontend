import React from "react";
import classes from "./screenshotPane.module.css";
import Screenshot1 from "../assets/ScreenShot -3.png";
import Screenshot2 from "../assets/Screenshot.png";

class screenshotPane extends React.Component {
	state = {
		curImgIndex: 1,
		curImg: "Screenshot1",
		curText: "See Live Groff Preview as you type your code",
	};
	changeImg = () => {
		if (this.state.curImg < 2) {
			const updatedImg = this.state.curImg + 1;
			this.setState({ curImg: updatedImg });
		}
	};
	render() {
		return (
			<div className={classes.screenshotPane}>
				<div className={classes.MainContainer}>
					<div className={classes.prev}>&#10094;</div>
					<div className={classes.next}>&#10095;</div>
					<div className={classes.slideshowContainer}>
						<div className={classes.mySlides}>
							<div className={classes.numbertext}>1 / 3</div>
							<img
								src={Screenshot1}
								style={{ "max-width": "100%" }}
								alt="Showcase"
							/>
						</div>
					</div>
					<div className={classes.text}>{this.state.curText}</div>
				</div>
			</div>
		);
	}
}

export default screenshotPane;
