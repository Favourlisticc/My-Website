import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import pdfFile from "../../Assets/Simon_Favour Sunday_Resume_24-10-2023-22-22-22.pdf";



pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdfFile}
            target="_blank"
            style={{ maxWidth: "270px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download my CV or Resume
          </Button>
        </Row>

        <Row className="resume">
          <Document file={pdfFile} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdfFile}
            target="_blank"
            style={{  maxWidth: "270px"}}
          >
            <AiOutlineDownload />
            &nbsp;Download my CV or Resume
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
