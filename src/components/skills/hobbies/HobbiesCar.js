import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./HobbiesCar.scss";
import CarWheel from "../../../images/skills/car_wheel.svg";
import CloudOne from "../../../images/skills/clouds/cloud1.svg";
import CloudTwo from "../../../images/skills/clouds/cloud2.svg";
import CloudThree from "../../../images/skills/clouds/cloud3.svg";
import CloudFour from "../../../images/skills/clouds/cloud4.svg";

export default function HobbiesCar() {
  const clouds = [
    { src: CloudOne, text: "TEXT 1", className: "mt-4" },
    { src: CloudTwo, text: "TEXT 2", className: "" },
    { src: CloudThree, text: "TEXT 3", className: "mt-4" },
    { src: CloudFour, text: "TEXT 4", className: "mb-5" },
  ];

  return (
    <Row className="py-3">
      <Col>
        <Card className="bg-primary rounded-3 shadow">
          <Card.Body>
            <Card.Title className="text-center">hobbies</Card.Title>
          </Card.Body>
          <Card.Body className="overflow-hidden p-0">
            <Container
              fluid
              className="scene d-flex flex-column justify-content-end rounded-5"
            >
              <Row className="clouds mb-auto">
                {clouds.map((cloud, index) => (
                  <Col key={index} className={cloud.className}>
                    <div className="cloud-container d-flex justify-content-center align-items-center position-relative">
                      <img
                        src={cloud.src}
                        alt={`Cloud ${index + 1}`}
                        className="img-fluid cloud-image position-absolute"
                      />
                      <div className="cloud-text z-2">{cloud.text}</div>
                    </div>
                  </Col>
                ))}
              </Row>

              <Row className="h-100">
                <Col className="d-flex justify-content-center">
                  <div className="car rounded-5 border border-4 border-dark d-flex justify-content-center align-items-center">
                    <h6>a_cool_car</h6>
                    <div className="wheel left border border-primary border-4 rounded-circle">
                      <img width="50" height="50" src={CarWheel} alt="Wheel" />
                    </div>
                    <div className="wheel right border border-primary border-4 rounded-circle">
                      <img width="50" height="50" src={CarWheel} alt="Wheel" />
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col className="px-0">
                  <div className="road rounded-bottom-5"></div>
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
