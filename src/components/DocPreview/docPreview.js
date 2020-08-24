import React from 'react'

const docPreview = (props) => {
	return (
		<div className="docPreview">
			<div dangerouslySetInnerHTML={{__html: props.children}}>
			</div>
		</div>
	);
}

export default docPreview
