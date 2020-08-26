import React from "react";

const docPreview = (props) => {
	const style = {
		width: props.ElWidth - 40,
		height: (props.ElWidth - 40) * 1.41,
	};

	return (
		<div className="docPreview" style={style}>
			<div dangerouslySetInnerHTML={{ __html: props.children }}></div>
		</div>
	);
};

export default docPreview;
