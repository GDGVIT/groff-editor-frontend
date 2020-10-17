import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const DocPreview = (props) => {
	const [numPages, setNumPages] = useState(null);
	// const [pageNumber, setPageNumber] = useState(1);

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
		// props.loadingAnimStop();
	}
	let scale; 
	if (props.ElWidth < 420){
		scale = 0.7
	} else{
		scale = 1
	}
	return (
		/* <object */
		/* 	data={`data:application/pdf;base64,${props.children}#toolbar=0`} */
		/* 	style={{ width: "100%", height: "100%" }} */
		// />
		<Document
			file={`data:application/pdf;base64,${props.children}`}
			onLoadSuccess={onDocumentLoadSuccess}
			onRender={props.loadingAnimStop}
		>
			{Array.apply(null, Array(numPages))
				.map((x, i) => i + 1)
				.map((page) => (
					<div>
						<Page
							key={"PageNo. " + page}
							pageNumber={page}
							scale={scale}
						/>
						<br />
					</div>
				))}
		</Document>
	);
};

export default DocPreview;
