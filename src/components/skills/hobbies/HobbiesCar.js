import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./HobbiesCar.scss";
import CarWheel from "../../../images/skills/car_wheel.svg";
import CloudOne from "../../../images/skills/clouds/cloud1.svg";
import CloudTwo from "../../../images/skills/clouds/cloud2.svg";
import CloudThree from "../../../images/skills/clouds/cloud3.svg";
import CloudFour from "../../../images/skills/clouds/cloud4.svg";

export default function HobbiesCar() {
  useEffect(() => {
    const handleAnimationEnd = (event) => {
      const cloudElement = event.target;
      cloudElement.classList.remove("cloud_animation");
    };

    const cloudElements = document.querySelectorAll(".cloud");
    cloudElements.forEach((cloud) => {
      cloud.addEventListener("animationend", handleAnimationEnd);
    });

    return () => {
      cloudElements.forEach((cloud) => {
        cloud.removeEventListener("animationend", handleAnimationEnd);
      });
    };
  }, []);

  const handleCloudClick = (index, isCopy) => {
    const cloudElements = document.querySelectorAll(".cloud");
    const cloudIndex = isCopy ? index + clouds.length : index; // offset for copy
    const clickedCloud = cloudElements[cloudIndex];

    if (clickedCloud) {
      clickedCloud.classList.add("cloud_animation");
    }
  };

  const clouds = [
    {
      src: CloudOne,
      text: "gaming",
      classNameCloud: "mt-4",
      classNameText: "mt-3",
    },
    {
      src: CloudTwo,
      text: "design",
      classNameCloud: "mb-5",
      classNameText: "mt-1",
    },
    {
      src: CloudThree,
      text: "running",
      classNameCloud: "mt-4",
      classNameText: "mt-2",
    },
    {
      src: CloudFour,
      text: "photography",
      classNameCloud: "mb-5",
      classNameText: "mt-3",
    },
    {
      src: CloudOne,
      text: "coding",
      classNameCloud: "mt-4",
      classNameText: "mt-2",
    },
    {
      src: CloudTwo,
      text: "podcasts",
      classNameCloud: "mb-5",
      classNameText: "mt-2",
    },
    {
      src: CloudThree,
      text: "drawing",
      classNameCloud: "mt-4",
      classNameText: "mt-2",
    },
    {
      src: CloudFour,
      text: "music",
      classNameCloud: "mb-5",
      classNameText: "mt-2",
    },
  ];

  return (
    <Row className="py-3 d-none d-md-block">
      <Col>
        <Card className="bg-primary rounded-3 shadow overflow-hidden">
          <Card.Body>
            <Card.Title className="text-center">hobbies</Card.Title>
          </Card.Body>
          <Card.Body className="overflow-hidden p-0">
            <Container
              fluid
              className="scene d-flex flex-column justify-content-end"
            >
              <Row className="mb-auto flex-grow-1 align-items-start">
                <Col>
                  <div className="slider my-2">
                    {/* Original Clouds */}
                    <div className="clouds">
                      {clouds.map((cloud, index) => (
                        <div
                          key={`original-${index}`}
                          className={`cloud non_selectable ${cloud.classNameCloud}`}
                          onClick={() => handleCloudClick(index, false)}
                        >
                          <img
                            src={cloud.src}
                            draggable={false}
                            alt={`Cloud ${index + 1}`}
                            className="img-fluid"
                          />
                          <h6 className={`cloud-text ${cloud.classNameText}`}>
                            {cloud.text}
                          </h6>
                        </div>
                      ))}
                    </div>
                    {/* Copy of Clouds */}
                    <div className="clouds">
                      {clouds.map((cloud, index) => (
                        <div
                          key={`copy-${index}`}
                          className={`cloud non_selectable ${cloud.classNameCloud}`}
                          onClick={() => handleCloudClick(index, true)}
                        >
                          <img
                            src={cloud.src}
                            draggable={false}
                            alt={`Cloud Copy ${index + 1}`}
                            className="img-fluid"
                          />
                          <h6 className={`cloud-text ${cloud.classNameText}`}>
                            {cloud.text}
                          </h6>
                        </div>
                      ))}
                    </div>
                  </div>
                </Col>
              </Row>

              <Row className="mt-5">
                <Col className="d-flex justify-content-center">
                  <div className="car rounded-5 border border-4 border-dark d-flex justify-content-center align-items-center">
                    <h6 className="non_selectable">a_cool_car</h6>
                    <div className="wheel left border border-primary border-4 rounded-circle">
                      <img
                        draggable={false}
                        width="50"
                        height="50"
                        src={CarWheel}
                        alt="Wheel"
                        className="non_selectable"
                      />
                    </div>
                    <div className="wheel right border border-primary border-4 rounded-circle">
                      <img
                        draggable={false}
                        width="50"
                        height="50"
                        src={CarWheel}
                        alt="Wheel"
                        className="non_selectable"
                      />
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
