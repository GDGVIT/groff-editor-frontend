import React from 'react'
import Ace from 'react-ace'

const CodeEditor = (props) => {
	return (<div style={{"padding": "20px"}}>
		<Ace onChange={props.codeStream}></Ace>
	</div>)
};
export default CodeEditor
