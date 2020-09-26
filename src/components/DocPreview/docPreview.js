import React from "react";

const docPreview = (props) => {
	const base = props.ElWidth ? props.ElWidth - 40 : "80%";
	const baseheight = props.ElWidth ? base * 1.41 : "0%";
	const style = {
		width: base,
		minHeight: baseheight,
	};

	return (
		<div className="docPreview" style={style}>
			<div dangerouslySetInnerHTML={{ __html: props.children }}></div>
		</div>
	);
};

export default docPreview;
