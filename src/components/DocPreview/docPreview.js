import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const DocPreview = (props) => {
	const [numPages, setNumPages] = useState(null);
	// const [pageNumber, setPageNumber] = useState(1);

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
	}
	return (
		/* <object */
		/* 	data={`data:application/pdf;base64,${props.children}#toolbar=0`} */
		/* 	style={{ width: "100%", height: "100%" }} */
		// />
		<Document
			file={`data:application/pdf;base64,${props.children}`}
			onLoadSuccess={onDocumentLoadSuccess}
		>
			{Array.apply(null, Array(numPages))
				.map((x, i) => i + 1)
				.map((page) => (
					<div>
						<Page
							key={"PageNo. " + page}
							pageNumber={page}
							scale={1.0}
						/>
						<br />
					</div>
				))}
		</Document>
	);
};

export default DocPreview;
