import "./CircuitBoard.scss";
import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function CircuitBoard() {
  const animationsOrder = [
    "animate-laser-line-right",
    "animate-laser-line-top",
    "animate-laser-line-right",
    "animate-laser-line-bottom",
    "animate-laser-line-bottom",
    "animate-laser-line-right",
    "animate-laser-line-top",
    "animate-laser-line-right",
    "animate-laser-line-top",
    "animate-laser-line-right",
    "animate-laser-line-bottom",
    "animate-laser-line-right",
  ];

  useEffect(() => {
    //get all laser divs
    const laserElements = Array.from(
      document.querySelectorAll('[id^="laser"]')
    );
    laserElements.sort((a, b) => {
      const numA = parseInt(a.id.replace("laser", ""), 10);
      const numB = parseInt(b.id.replace("laser", ""), 10);
      return numA - numB;
    });
    //get all dots
    const dotElements = Array.from(document.querySelectorAll('[id^="dot"]'));
    dotElements.sort((a, b) => {
      const numA = parseInt(a.id.replace("dot", ""), 10);
      const numB = parseInt(b.id.replace("dot", ""), 10);
      return numA - numB;
    });
    dotElements[0].style.transform = "scale(1.2)";

    //function gets called after animaitons finish
    const handleAnimationEnd = (event, index) => {
      const currentElement = laserElements[index];
      currentElement.classList.remove(animationsOrder[index]);
      const nextIndex = (index + 1) % laserElements.length;

      if (animationsOrder[nextIndex]) {
        laserElements[nextIndex].classList.add(animationsOrder[nextIndex]);
      }
    };

    laserElements.forEach((laser, index) => {
      laser.addEventListener("animationiteration", (event) =>
        handleAnimationEnd(event, index)
      );
    });

    return () => {
      laserElements.forEach((element, index) => {
        element.removeEventListener("animationiteration", (event) =>
          handleAnimationEnd(event, index)
        );
      });
    };
  }, []);
  return (
    <Row className="py-3">
      <Col>
        <Card className="rounded-3 shadow">
          <Card.Body>
            <Card.Title className="text-center fw-bold">testing</Card.Title>
          </Card.Body>
          <Card.Body>
            <Container fluid>
              <Row>
                <Col className="d-flex justify-content-end align-items-center position-relative px-0">
                  <div className="line bg-dark vertical rounded">
                    <div
                      className="bg-primary position-absolute laser-line-vertical rounded"
                      id="laser2"
                    ></div>
                  </div>
                  <div
                    className="dot bg-primary big top right d-flex justify-content-center align-items-center"
                    id="dot3"
                  >
                    <div className="dot small bg-success"></div>
                  </div>
                </Col>
                <Col className="d-flex justify-content-center align-items-top position-relative px-0">
                  <div className="line bg-dark horizontal rounded overflow-hidden">
                    <div
                      className="bg-primary position-absolute laser-line-horizontal rounded"
                      id="laser3"
                    ></div>
                  </div>
                </Col>
                <Col className="d-flex justify-content-start align-items-center position-relative px-0">
                  <div className="line bg-dark vertical rounded">
                    <div
                      className="bg-primary position-absolute laser-line-vertical rounded"
                      id="laser4"
                    ></div>
                  </div>
                  <div
                    className="dot bg-primary big top left d-flex justify-content-center align-items-center"
                    id="dot4"
                  >
                    <div className="dot small bg-success"></div>
                  </div>
                </Col>
                <Col className="d-flex justify-content-end align-items-top position-relative px-0">
                  <div className="line bg-dark vertical rounded">
                    <div
                      className="bg-primary position-absolute laser-line-vertical rounded"
                      id="laser9"
                    ></div>
                  </div>
                  <div
                    className="dot bg-primary big top right d-flex justify-content-center align-items-center"
                    id="dot10"
                  >
                    <div className="dot small bg-success"></div>
                  </div>
                </Col>
                <Col className="d-flex justify-content-center align-items-top position-relative px-0">
                  <div className="line bg-dark horizontal rounded overflow-hidden">
                    <div
                      className="bg-primary position-absolute laser-line-horizontal rounded"
                      id="laser10"
                    ></div>
                  </div>
                </Col>
                <Col className="d-flex justify-content-start align-items-center position-relative px-0">
                  <div className="line bg-dark vertical rounded">
                    <div
                      className="bg-primary position-absolute laser-line-vertical rounded"
                      id="laser11"
                    ></div>
                  </div>
                  <div
                    className="dot bg-primary big top left d-flex justify-content-center align-items-center"
                    id="dot11"
                  >
                    <div className="dot small bg-success"></div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col className="d-flex justify-content-center align-items-top position-relative px-0">
                  <div className="line bg-dark horizontal rounded overflow-hidden">
                    <div
                      className="bg-primary position-absolute laser-line-horizontal animate-laser-line-right rounded"
                      id="laser1"
                    ></div>
                  </div>
                  <div
                    className="dot bg-primary big top right d-flex justify-content-center align-items-center"
                    id="dot2"
                  >
                    <div className="dot small bg-success"></div>
                  </div>
                  <div
                    className="dot bg-primary big top left d-flex justify-content-center align-items-center"
                    id="dot1"
                  >
                    <div className="dot small bg-success" id="1.1"></div>
                  </div>
                </Col>
                <Col
                  xs={{ span: 2, offset: 2 }}
                  className="d-flex justify-content-between align-items-center position-relative px-0"
                >
                  <div className="line bg-dark vertical rounded">
                    <div
                      className="bg-primary position-absolute laser-line-vertical rounded"
                      id="laser5"
                    ></div>
                  </div>
                  <div
                    className="dot bg-primary big top left d-flex justify-content-center align-items-center"
                    id="dot5"
                  >
                    <div className="dot small bg-success"></div>
                  </div>
                  <div className="line bg-dark vertical rounded">
                    <div
                      className="bg-primary position-absolute laser-line-vertical rounded"
                      id="laser7"
                    ></div>
                  </div>
                  <div
                    className="dot bg-primary big top right d-flex justify-content-center align-items-center"
                    id="dot8"
                  >
                    <div className="dot small bg-success"></div>
                  </div>
                </Col>
                <Col className="d-flex justify-content-center align-items-top position-relative px-0">
                  <div className="line bg-dark horizontal rounded overflow-hidden">
                    <div
                      className="bg-primary position-absolute laser-line-horizontal rounded"
                      id="laser8"
                    ></div>
                  </div>
                  <div
                    className="dot bg-primary big top right d-flex justify-content-center align-items-center"
                    id="dot9"
                  >
                    <div className="dot small bg-success"></div>
                  </div>
                </Col>
                <Col
                  xs={{ span: 2, offset: 2 }}
                  className="d-flex justify-content-center align-items-top position-relative px-0"
                >
                  <div className="line bg-dark horizontal rounded overflow-hidden">
                    <div
                      className="bg-primary position-absolute laser-line-horizontal rounded"
                      id="laser12"
                    ></div>
                  </div>
                  <div
                    className="dot bg-primary big top left d-flex justify-content-center align-items-center"
                    id="dot12"
                  >
                    <div className="dot small bg-success"></div>
                  </div>
                  <div
                    className="dot bg-primary big top right d-flex justify-content-center align-items-center"
                    id="dot13"
                  >
                    <div className="dot small bg-success"></div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col
                  xs={{ span: 2, offset: 4 }}
                  className="d-flex justify-content-center align-items-top position-relative px-0"
                >
                  <div
                    className="dot bg-primary big bottom left d-flex justify-content-center align-items-center"
                    id="dot6"
                  >
                    <div className="dot small bg-success"></div>
                  </div>
                  <div className="line bg-dark horizontal rounded overflow-hidden">
                    <div
                      className="bg-primary position-absolute laser-line-horizontal rounded"
                      id="laser6"
                    ></div>
                  </div>
                  <div
                    className="dot bg-primary big bottom right d-flex justify-content-center align-items-center"
                    id="dot7"
                  >
                    <div className="dot small bg-success"></div>
                  </div>
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
