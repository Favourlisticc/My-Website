import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import mywebsiteimg from "../../Assets/my-website-img.png";
import taskimg from "../../Assets/favourtask-img.png";
import favdeliveryimg from "../../Assets/delivery-img.png";
import foodimg from "../../Assets/food-img.png"

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
              imgPath={mywebsiteimg}
              isBlog={false}
              title="MyWebsite"
              description=" My Portfolio"
              ghLink="https://github.com/Favourlisticc/My-Website"
              demoLink="https://www.simonfavoursunday.tech"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mywebsiteimg}
              isBlog={false}
              title="CharityDonate"
              description=" My Portfolio"
              ghLink="https://github.com/Favourlisticc/CharityDonate"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taskimg}
              isBlog={false}
              title="Favour Task aplication"
              description=""
              ghLink="https://github.com/Favourlisticc/Favour-To-Do-application"
              demoLink="https://favour-to-do-app.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={favdeliveryimg}
              isBlog={false}
              title="Favour Delivery Company"
              description=""
              ghLink="https://github.com/Favourlisticc/DeliveryCompany"
              demoLink="https://favour-personal-delivery-company.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodimg}
              isBlog={false}
              title="Easy-Food-order-API-rest"
              description=""
              ghLink="https://github.com/Favourlisticc/Easy-Food-order-API-rest"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mywebsiteimg}
              isBlog={false}
              title="Favour community Story-Book"
              description=""
              ghLink="https://github.com/Favourlisticc/Story-Book"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mywebsiteimg}
              isBlog={false}
              title="a-simple-visa-system-done-with-reactj"
              description=""
              ghLink="https://github.com/Favourlisticc/a-simple-visa-system-done-with-reactj"
              // demoLink=""      <--------Please include a demo link here
            />
          </Col>

{/* bonus clone */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mywebsiteimg}
              isBlog={false}
              title="IOS-calculator-app"
              description=""
              ghLink="https://github.com/Favourlisticc/IOS-calculator-app"
              // demoLink=""      <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mywebsiteimg}
              isBlog={false}
              title="Clone-of-Instagram-with-Laravel-PHP-framework"
              description=""
              ghLink="https://github.com/Favourlisticc/Clone-of-Instagram-with-Laravel-PHP-framework"
              // demoLink=""      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
