import React from "react";
import classes from "./screenshotPane.module.css";
import Screenshot1 from "../assets/ScreenShot -3.png";
import Screenshot2 from "../assets/Screenshot.png";

class screenshotPane extends React.Component {
	state = {
		curImgIndex: 0,
		DisplayArray: [
			{
				curImg: Screenshot1,
				curText: "See Live Groff Preview as you type your code",
			},
			{
				curImg: Screenshot2,
				curText: "Cloud storage for all your documents",
			},
		],
	};
	NextImg = () => {
		if (this.state.curImgIndex < 1) {
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
			this.setState({ curImgIndex: 1 });
		}
	};
	render() {
		return (
			<div className={classes.screenshotPane}>
				<div className={classes.MainContainer}>
					<div
						className={classes.prev}
						onClick={() => this.PrevImg()}
					>
						&#10094;
					</div>
					<div
						className={classes.next}
						onClick={() => this.NextImg()}
					>
						&#10095;
					</div>
					<div className={classes.slideshowContainer}>
						<div className={classes.mySlides}>
							{/* <div className={classes.numbertext}>1 / 3</div> */}
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
