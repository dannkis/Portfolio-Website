import React from "react";
import Carousel from "../components/skills/carousel/Carousel.js";
import "./Skills.scss";
import { Helmet } from "react-helmet";
import { Container, Row, Col, Card } from "react-bootstrap";
import CircuitBoard from "../components/skills/circuit_board/CircuitBoard.js";
import HobbiesCar from "../components/skills/hobbies/HobbiesCar.js";

export default function Skills() {
  return (
    <>
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
        <HobbiesCar />
        <Row>
          <Col
            sm={12}
            lg={4}
            className="d-flex flex-column flex-grow-1 card-my-md-1"
          >
            <Card className="bg-secondary rounded-3 shadow h-100 justify-content-between ">
              <Card.Body>
                <Card.Title className="text-center fw-bold">
                  programming
                </Card.Title>
              </Card.Body>
              <Card.Body>
                <Card.Text>
                  I am experienced in using popular web frameworks from Next.js
                  for front-end, to Django for developing backend. With these
                  skills, I can create visually appealing and interactive
                  websites and web applications, as well as work with databases.
                </Card.Text>
              </Card.Body>
              <Card.Body className="px-0">
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
                    "next.js",
                    "django",
                    "mongodb",
                  ]}
                  ROWS={2}
                  TAGS_PER_ROW={5}
                  DURATION={20000}
                  COLOR={"#ffc300"}
                />
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} lg={4} className="d-flex card-my-md-1">
            <Card className="bg-success rounded-3 shadow-sm h-100 d-flex justify-content-between">
              <Card.Body>
                <Card.Title className="text-center fw-bold">
                  problem-solving
                </Card.Title>
              </Card.Body>
              <Card.Body className="px-0">
                <Carousel
                  tag_symbol={"#"}
                  TAGS={[
                    "critical-thinking",
                    "problem-solving",
                    "motivated",
                    "collaborative",
                    "motivated",
                    "communication",
                  ]}
                  ROWS={2}
                  TAGS_PER_ROW={5}
                  DURATION={20000}
                  COLOR={"#fc9c1c"}
                />
              </Card.Body>
              <Card.Body>
                <Card.Text className="text-justify display-8">
                  I have a keen attention to detail and am skilled in
                  identifying patterns and trends that can help me to diagnose
                  issues. I am also able to work collaboratively with others to
                  brainstorm ideas and develop strategies for overcoming
                  obstacles.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col
            sm={12}
            lg={4}
            className="d-flex flex-column flex-grow-1 card-my-md-1"
          >
            <Card className="bg-secondary rounded-3 shadow h-100 justify-content-between">
              <Card.Body>
                <Card.Title className="text-center fw-bold">tools</Card.Title>
              </Card.Body>
              <Card.Body>
                <Card.Text className="text-justify">
                  I am experienced with wide variety of software tools, some of
                  which are Visual Studio, GitHub, Access Databases and Git. I
                  am able to appropriately find the right tools required for the
                  proper execution of specific tasks.
                </Card.Text>
              </Card.Body>
              <Card.Body className="px-0">
                <Carousel
                  tag_symbol={"#"}
                  TAGS={[
                    "vs",
                    "github",
                    "vscode",
                    "figma",
                    "access",
                    "netbeans",
                  ]}
                  ROWS={2}
                  TAGS_PER_ROW={5}
                  DURATION={20000}
                  COLOR={"#ffc300"}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <CircuitBoard />
      </Container>
    </>
  );
}
