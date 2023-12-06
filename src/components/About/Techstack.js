// import { Font } from "@react-pdf/renderer";
import React from "react";
import { Col, Row } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit

} from "react-icons/di";
import {

  SiNextdotjs,
  SiTailwindcss

} from "react-icons/si";

// import { BiLogoHtml5 } from "react-icons/bi";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
     <Col xs={4} md={2} className="tech-icons">
      {/* <BiLogoHtml5 /> */}
      <p class="For-techicons">Html</p>
      </Col>

       <Col xs={4} md={2} className="tech-icons">
      <FaCss3Alt />
      <p class="For-techicons">Css</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p class="For-techicons">Javascript</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <TbBrandJavascript />
        <p class="For-techicons">ExpressJS</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p class="For-techicons">NodeJs</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p class="For-techicons">ReactJS</p>
      </Col>

       <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
        <p class="For-techicons">Tailwind Css</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <p class="For-techicons">MongoDb</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <p class="For-techicons">NextJS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGithub />
        <p class="For-techicons">GitHub</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p class="For-techicons">Git</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p class="For-techicons">Python</p>
      </Col>
      
    </Row>
  );
}

export default Techstack;
