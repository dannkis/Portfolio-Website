import React, { useState, useEffect } from "react";
import { Row, Col, Container, Card, Button, Image } from "react-bootstrap";
import "./Projects.scss";
import RotaMaker from "../images/projects/rota-maker/preview.png";
import WeatherApp from "../images/projects/weather-app/preview.png";
import CryptoWalletApp from "../images/projects/crypto-wallet/preview.png";

import vsCodeLogo from "../images/projects/logos/vs.svg";
import reactLogo from "../images/projects/logos/react.svg";
import cSharpLogo from "../images/projects/logos/c-sharp.svg";
import msAccessLogo from "../images/projects/logos/access.svg";
import dotNetLogo from "../images/projects/logos/dot-net-logo.svg";
import bootstrapLogo from "../images/projects/logos/bootstrap.svg";
import sassLogo from "../images/projects/logos/sass.svg";
import figmaLogo from "../images/projects/logos/figma.svg";

export default function Projects() {
  const projectData = [
    {
      id: 1,
      title: "Rota Maker 4",
      image: RotaMaker,
      description:
        "A scheduling tool for the hospitality sector, simplifying rota creation, sharing, and employee data management.",
      tools: [cSharpLogo, msAccessLogo, dotNetLogo, vsCodeLogo],
      codeRepo: "https://github.com/dannkis/RotaMaker-4",
      releaseRepo: "https://github.com/dannkis/RotaMaker-4-RELEASE",
    },
    {
      id: 2,
      title: "Agronova",
      image: WeatherApp,
      description:
        "A weather web app for farmers, offering real-time data, forecasts, and crop-specific recommendations.",
      tools: [reactLogo, bootstrapLogo, sassLogo, figmaLogo],
      codeRepo: "https://github.com/dannkis/GUI-Weather-App-Concept",
      releaseRepo: null,
    },
    {
      id: 3,
      title: "CryptiQ",
      image: CryptoWalletApp,
      description:
        "A secure crypto wallet for managing and transacting cryptocurrencies with ease and safety.",
      tools: [reactLogo, bootstrapLogo, sassLogo, figmaLogo],
      codeRepo: "https://github.com/dannkis/Crypto-Wallet-App-Concept",
      releaseRepo: null,
    },
  ];

  const themes = [
    { variant: "primary", button: "secondary" },
    { variant: "primary", button: "success" },
    { variant: "secondary", button: "primary" },
    { variant: "secondary", button: "success" },
    { variant: "success", button: "primary" },
    { variant: "success", button: "secondary" },
  ];

  const [cardThemes, setCardThemes] = useState(
    projectData.map(() => themes[Math.floor(Math.random() * themes.length)])
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCardThemes(
        projectData.map(() => themes[Math.floor(Math.random() * themes.length)])
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [projectData]);

  return (
    <Row>
      <Col xs={12}>
        <Container fluid>
          <Row>
            <Col xs={12}>
              <h3 className="text-secondary text-center scroll-here-projects">
                projects
              </h3>
            </Col>
          </Row>
          <Row className="justify-content-evenly p-5 gy-4 align-items-center">
            {projectData.map((project, index) => {
              const theme = cardThemes[index];
              return (
                <Col
                  xs={12}
                  md={6}
                  xl={4}
                  xxl={3}
                  className="d-flex justify-content-center"
                >
                  <Card
                    key={project.id}
                    bg={theme.variant}
                    className="project-card shadow rounded-5 overflow-hidden scale-1"
                  >
                    <Card.Img
                      variant="top"
                      src={project.image}
                      alt={project.title}
                      className="rounded-top-5 blur-on-hover"
                    />
                    <Card.Body>
                      <Container
                        fluid
                        className="description-overlay d-flex flex-column justify-content-center overflow-hidden position-absolute bottom-0 start-0 end-0 h-0"
                      >
                        <Row>
                          <Col xs={12} className="px-4 text-center">
                            <p className="fw-bold">{"<description>"}</p>
                          </Col>
                          <Col xs={12} className="px-4 text-center">
                            <p>{project.description}</p>
                          </Col>
                        </Row>
                        <Row>
                          <Col
                            xs={12}
                            className="d-flex flex-column align-items-center justify-content-center h-100 w-100"
                          >
                            <Button
                              variant={theme.button}
                              href={project.codeRepo}
                              className="rounded-5 mb-2 scale-1"
                            >
                              code_repo
                            </Button>
                            {project.releaseRepo && (
                              <Button
                                variant={theme.button}
                                href={project.releaseRepo}
                                className="rounded-5 scale-1"
                              >
                                release_repo
                              </Button>
                            )}
                          </Col>
                        </Row>
                      </Container>
                    </Card.Body>

                    <Card.Body className="blur-on-hover">
                      <Card.Title className="text-center">
                        {project.title}
                      </Card.Title>
                    </Card.Body>
                    <Card.Body className="blur-on-hover">
                      <Card.Text className="text-center fw-bold">
                        {"<tools_used>"}
                      </Card.Text>
                    </Card.Body>
                    <Card.Body className="blur-on-hover">
                      <Container fluid>
                        <Row className="justify-content-evenly">
                          {project.tools.map((tool) => (
                            <Col
                              xs={3}
                              lg={2}
                              className="d-flex align-items-center justify-content-center "
                            >
                              <Image fluid src={tool} alt="Tool Icon" />
                            </Col>
                          ))}
                        </Row>
                      </Container>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </Col>
    </Row>
  );
}
