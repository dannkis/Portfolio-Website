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
      tools: [cSharpLogo, msAccessLogo, dotNetLogo, vsCodeLogo],
      codeRepo: "https://github.com/dannkis/RotaMaker-4",
      releaseRepo: "https://github.com/dannkis/RotaMaker-4-RELEASE",
    },
    {
      id: 2,
      title: "Agronova",
      image: WeatherApp,
      tools: [reactLogo, bootstrapLogo, sassLogo, figmaLogo],
      codeRepo: "https://github.com/dannkis/GUI-Weather-App-Concept",
      releaseRepo: null,
    },
    {
      id: 3,
      title: "CryptiQ",
      image: CryptoWalletApp,
      tools: [reactLogo, bootstrapLogo, sassLogo, figmaLogo],
      codeRepo: "https://github.com/dannkis/Crypto-Wallet-App-Concept",
      releaseRepo: null,
    },
    {
      id: 4,
      title: "Rota Maker 4",
      image: RotaMaker,
      tools: [cSharpLogo, msAccessLogo, dotNetLogo, vsCodeLogo],
      codeRepo: "https://github.com/dannkis/RotaMaker-4",
      releaseRepo: "https://github.com/dannkis/RotaMaker-4-RELEASE",
    },
    {
      id: 5,
      title: "Agronova",
      image: WeatherApp,
      tools: [reactLogo, bootstrapLogo, sassLogo, figmaLogo],
      codeRepo: "https://github.com/dannkis/GUI-Weather-App-Concept",
      releaseRepo: null,
    },
    {
      id: 6,
      title: "CryptiQ",
      image: CryptoWalletApp,
      tools: [reactLogo, bootstrapLogo, sassLogo, figmaLogo],
      codeRepo: "https://github.com/dannkis/Crypto-Wallet-App-Concept",
      releaseRepo: null,
    },
    {
      id: 7,
      title: "Rota Maker 4",
      image: RotaMaker,
      tools: [cSharpLogo, msAccessLogo, dotNetLogo, vsCodeLogo],
      codeRepo: "https://github.com/dannkis/RotaMaker-4",
      releaseRepo: "https://github.com/dannkis/RotaMaker-4-RELEASE",
    },
    {
      id: 8,
      title: "Agronova",
      image: WeatherApp,
      tools: [reactLogo, bootstrapLogo, sassLogo, figmaLogo],
      codeRepo: "https://github.com/dannkis/GUI-Weather-App-Concept",
      releaseRepo: null,
    },
    {
      id: 9,
      title: "CryptiQ",
      image: CryptoWalletApp,
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
    <Row className="min-vh-100">
      <Col xs={12}>
        <Row>
          <Col xs={12}>
            <h3 className="text-secondary text-center scroll-here-projects">
              projects
            </h3>
          </Col>
        </Row>
        <Row className="g-5 justify-content-center px-5">
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
                  <div className="card-hover-content position-relative">
                    <Card.Img
                      variant="top"
                      src={project.image}
                      alt={project.title}
                      className="figuree rounded-top-5"
                    />
                    <div className="hover-overlay position-absolute d-flex flex-column align-items-center justify-content-center h-100 w-100">
                      <Button
                        variant={theme.button}
                        href={project.codeRepo}
                        className="hover-btn rounded-5 mb-2"
                      >
                        code repo
                      </Button>
                      {project.releaseRepo && (
                        <Button
                          variant={theme.button}
                          href={project.releaseRepo}
                          className="hover-btn rounded-5"
                        >
                          release repo
                        </Button>
                      )}
                    </div>
                  </div>
                  <Card.Body>
                    <Card.Title className="text-center">
                      {project.title}
                    </Card.Title>
                  </Card.Body>
                  <Card.Body className="py-0">
                    <Card.Text className="text-center">
                      &lt;tools used&gt;
                    </Card.Text>
                  </Card.Body>
                  <Card.Body className="py-0">
                    <Container fluid>
                      <Row className="justify-content-between">
                        {project.tools.map((tool, index) => (
                          <Col
                            xs={3}
                            key={index}
                            className="d-flex align-items-center justify-content-center p-4"
                          >
                            <Image
                              fluid
                              src={tool}
                              alt="Tool Icon"
                              className="tool-icon"
                            />
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
      </Col>
    </Row>
  );
}
