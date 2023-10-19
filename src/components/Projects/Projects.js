import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import imagg from "../../Assets/first-half_prev_ui.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imagg}
              isBlog={false}
              title="Chatify"
              description=""
              ghLink="./"
              demoLink="../"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imagg}
              isBlog={false}
              title="Bits-0f-C0de"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imagg}
              isBlog={false}
              title="Editor.io"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imagg}
              isBlog={false}
              title="Plant AI"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imagg}
              isBlog={false}
              title="Ai For Social Good"
              description=""
              ghLink=""
              // demoLink="" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imagg}
              isBlog={false}
              title=""
              description=""
              // demoLink=""      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
