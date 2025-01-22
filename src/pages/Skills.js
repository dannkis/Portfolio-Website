import React, { useEffect } from "react";
import Carousel from "../components/carousel/Carousel.js";
import { Container, Row, Col, Card } from "react-bootstrap";
import CircuitBoard from "../components/skills/CircuitBoard.js";

export default function Skills() {
  return (
    <Container
      fluid
      className="reveal skillsSection min-vh-100"
      id="scroll-here-skills"
    >
      <Row>
        <Col>
          <h1 className="text-center">skills</h1>
        </Col>
      </Row>
      <Row className="py-3">
        <Col>
          <Card className="bg-primary rounded-3 shadow">
            <Card.Body>
              <Card.Title className="text-center">Version Control</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="py-2">
        <Col sm={12} lg={4} className="">
          <Card className="bg-secondary rounded-3 shadow">
            <Card.Body>
              <Card.Title className="text-center fw-bold">
                programming
              </Card.Title>
              <Card.Text>
                I have experience in using web dev technologies such as CSS, and
                PHP. With these skills, I can create visually appealing and
                interactive websites and web applications, as well as work with
                databases.
              </Card.Text>
              <Carousel
                tag_symbol={"#"}
                TAGS={[
                  "c#",
                  "java",
                  "python",
                  "php",
                  "javascript",
                  "react.js",
                  "sass",
                  "bootstrap",
                  "node.js",
                ]}
                ROWS={2}
                TAGS_PER_ROW={5}
                DURATION={30000}
              />
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} lg={4}>
          <Card className="bg-success rounded-3 shadow">
            <Card.Body>
              <Card.Title className="text-center fw-bold">
                problem-solving
              </Card.Title>
              <Card.Text>
                I have a keen attention to detail and am skilled in identifying
                patterns and trends that can help me to diagnose issues. I am
                also able to work collaboratively with others to brainstorm
                ideas and develop strategies for overcoming obstacles.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} lg={4}>
          <Card className="bg-secondary rounded-3 shadow">
            <Card.Body>
              <Card.Title className="text-center fw-bold">tools</Card.Title>
              <Card.Text>
                I have experience with wide variety of software tools, some of
                which are Visual Studio, GitHub, Access Databases and Git. I am
                able to appropriately find the right tools required for the
                proper execution of specific tasks.
              </Card.Text>
              <Carousel
                tag_symbol={"#"}
                TAGS={["vs", "github", "vscode", "figma", "access", "netbeans"]}
                ROWS={2}
                TAGS_PER_ROW={5}
                DURATION={30000}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <CircuitBoard />
    </Container>
  );
}
