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

      if (index > 0) {
        dotElements[index].style.transform = "scale(1)";
      }
      dotElements[index + 1].style.transform = "scale(1.2)";

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
    <Row className="py-3 d-none d-xl-block">
      <Col>
        <Card className="rounded-3 shadow p-4">
          <Card.Body>
            <Card.Title className="text-center fw-bold">
              additional_skills
            </Card.Title>
          </Card.Body>
          <Card.Body>
            <Container fluid>
              <Row>
                <Col className="d-flex justify-content-end align-items-center position-relative px-0">
                  <div className="line bg-dark vertical right rounded">
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
                  <Container fluid className="p-0">
                    <Row>
                      <Col>
                        <div className="line bg-dark horizontal rounded overflow-hidden">
                          <div
                            className="bg-primary position-absolute laser-line-horizontal rounded"
                            id="laser3"
                          ></div>
                        </div>
                      </Col>
                    </Row>
                    <Row className="h-100">
                      <Col xs={{ span: 8, offset: 2 }}>
                        <Container
                          fluid
                          className="bg-dark rounded-bottom text-light text-center skills-hover overflow-hidden"
                        >
                          <Row>
                            <Col>
                              <span>compatibility</span>
                            </Col>
                          </Row>
                          <Row className="h-100 pb-4 ">
                            <Col className="h-100 d-flex align-items-center justify-content-center">
                              <span className="skills-hover-text">
                                Strong understanding of cross-platform
                                compatibility.
                              </span>
                            </Col>
                          </Row>
                        </Container>
                      </Col>
                    </Row>
                  </Container>
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
                <Col className="position-relative px-0">
                  <Container fluid className="h-100">
                    <Row>
                      <Col className="p-0">
                        <div className="line bg-dark horizontal rounded overflow-hidden">
                          <div
                            className="bg-primary position-absolute laser-line-horizontal rounded"
                            id="laser10"
                          ></div>
                        </div>
                      </Col>
                    </Row>
                    <Row className="h-100">
                      <Col xs={{ span: 8, offset: 2 }} className="px-0">
                        <Container
                          fluid
                          className="bg-dark rounded-bottom text-light text-center skills-hover overflow-hidden"
                        >
                          <Row>
                            <Col>
                              <span>adaptation</span>
                            </Col>
                          </Row>
                          <Row className="h-100 pb-4 ">
                            <Col className="h-100 d-flex align-items-center justify-content-center">
                              <span className="skills-hover-text">
                                Easily adaptable to new challenging situations
                                and complex frameworks.
                              </span>
                            </Col>
                          </Row>
                        </Container>
                      </Col>
                    </Row>
                  </Container>
                </Col>
                <Col className="d-flex justify-content-start align-items-center position-relative px-0">
                  <Container fluid>
                    <Row>
                      <Col xs={1} className="p-0">
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
                      <Col
                        xs={{ span: 8, offset: 1 }}
                        className="d-flex align-items-end px-0"
                      >
                        <Container
                          fluid
                          className="bg-dark rounded-top text-light w-100 text-center skills-hover overflow-hidden pt-2"
                        >
                          <Row>
                            <Col>
                              <span>passion</span>
                            </Col>
                          </Row>
                          <Row className="h-100 pb-4 ">
                            <Col className="h-100 d-flex align-items-center justify-content-center">
                              <span className="skills-hover-text">
                                I am passionate about coding!
                              </span>
                            </Col>
                          </Row>
                        </Container>
                      </Col>
                    </Row>
                  </Container>
                </Col>
              </Row>
              <Row>
                <Col className="d-flex justify-content-center align-items-top position-relative p-0">
                  <Container fluid className="p-0">
                    <Row>
                      <Col>
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
                          className="dot bg-primary big top left d-flex justify-content-center align-items-center scale-1"
                          id="dot1"
                        >
                          <div className="dot small bg-success" id="1.1"></div>
                        </div>
                      </Col>
                    </Row>
                    <Row className="h-100">
                      <Col xs={{ span: 8, offset: 2 }}>
                        <Container
                          fluid
                          className="bg-dark rounded-bottom text-light text-center skills-hover overflow-hidden"
                        >
                          <Row>
                            <Col>
                              <span>testing</span>
                            </Col>
                          </Row>
                          <Row className="pb-4 h-100">
                            <Col className="d-flex align-items-center justify-content-center">
                              <span className="skills-hover-text">
                                Producing production-ready code.
                              </span>
                            </Col>
                          </Row>
                        </Container>
                      </Col>
                    </Row>
                  </Container>
                </Col>
                <Col
                  xs={{ span: 2, offset: 2 }}
                  className=" position-relative px-0"
                >
                  <Container fluid className="px-0">
                    <Row>
                      <Col xs={2} className="pe-0">
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
                      </Col>
                      <Col
                        xs={{ span: 6, offset: 1 }}
                        className="d-flex align-items-end px-0"
                      >
                        <Container
                          fluid
                          className="bg-dark rounded-top text-light w-100 text-center skills-hover overflow-hidden pt-2"
                        >
                          <Row>
                            <Col>
                              <span>ux/ui</span>
                            </Col>
                          </Row>
                          <Row className="h-100 pb-4 ">
                            <Col className="h-100 d-flex align-items-center justify-content-center">
                              <span className="skills-hover-text">
                                Keen attention to detail and a strong passion
                                for user interface design.
                              </span>
                            </Col>
                          </Row>
                        </Container>
                      </Col>
                      <Col
                        xs={{ span: 2, offset: 1 }}
                        className="d-flex justify-content-end ps-0"
                      >
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
                    </Row>
                  </Container>
                </Col>
                <Col className="position-relative px-0">
                  <Container fluid className="h-100">
                    <Row>
                      <Col className="p-0">
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
                    </Row>
                    <Row className="h-100">
                      <Col xs={{ span: 7, offset: 2 }} className="px-0 ">
                        <Container
                          fluid
                          className="bg-dark rounded-bottom text-light text-center skills-hover overflow-hidden"
                        >
                          <Row>
                            <Col>
                              <span>creativity</span>
                            </Col>
                          </Row>
                          <Row className="h-100 pb-4 ">
                            <Col className="h-100 d-flex align-items-center justify-content-center">
                              <span className="skills-hover-text">
                                Constantly looking for creative ways to use
                                latest technologies.
                              </span>
                            </Col>
                          </Row>
                        </Container>
                      </Col>
                    </Row>
                  </Container>
                </Col>
                <Col
                  xs={{ span: 2, offset: 2 }}
                  className="position-relative px-0"
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
                    className="dot bg-primary big top right d-flex justify-content-center align-items-center scale-1"
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
