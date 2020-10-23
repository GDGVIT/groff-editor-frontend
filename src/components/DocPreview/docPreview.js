import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const DocPreview = (props) => {
  const [numPages, setNumPages] = useState(null);
  const [scale, setScale] = useState(1);
  // const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    // props.loadingAnimStop();
  }
  function Zoom(dir) {
    console.log("Zooming");
    if (dir === 1) {
      setScale(scale + 0.1);
    } else {
      setScale(scale - 0.1);
    }
    console.log("to ", scale);
  }
  useEffect(() => {
    if (props.ElWidth < 420) {
      setScale(0.7);
    }
  },[]);
  return (
    /* <object */
    /* 	data={`data:application/pdf;base64,${props.children}#toolbar=0`} */
    /* 	style={{ width: "100%", height: "100%" }} */
    // />
    <>
      {/* <div className="PDFcontrols">
        <div className="ZoomIn" onClick={() => Zoom(1)}>
          +
        </div>
        <div className="ZoomIn" onClick={() => Zoom(0)}>
          -
        </div>
      </div> */}
      <Document
        file={`data:application/pdf;base64,${props.children}`}
        onLoadSuccess={onDocumentLoadSuccess}
        onRender={props.loadingAnimStop}
      >
        {Array.apply(null, Array(numPages))
          .map((x, i) => i + 1)
          .map((page) => (
            <div>
              <Page key={"PageNo. " + page} pageNumber={page} scale={scale} />
              <br />
            </div>
          ))}
      </Document>
    </>
  );
};

export default DocPreview;
