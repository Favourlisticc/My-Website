import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
} from "react-icons/si";
import { FaWindows } from "react-icons/fa";
import { IoLogoNpm } from "react-icons/io";
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaWindows />
        <p class="For-techicons">Windows</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p class="For-techicons"> Visual studio code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p class="For-techicons">Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
        <p class="For-techicons">Slack</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <IoLogoNpm />
        <p class="For-techicons">Npm</p>
      </Col>



    </Row>
  );
}

export default Toolstack;
