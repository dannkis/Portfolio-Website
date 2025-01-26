import React from "react";
import { Container, Row, Col, Figure } from "react-bootstrap";
import { Helmet } from "react-helmet";
import "./AboutMe.scss";
import portraitImage from "../images/portraitImage2-cr2.JPG";
import portraitImageBackground from "../images/blob.svg";

export default function AboutMe() {
  return (
    <>
      <Helmet>
        <title>About Me</title>
      </Helmet>

      <Row className="align-items-center min-vh-100" id="scroll-here-intro">
        <Col
          xs={12}
          md={6}
          className="d-flex align-items-center justify-content-center"
        >
          <div className="w-100">
            <Figure
              className="user-select-none d-flex justify-content-center align-items-center position-relative overflow-hidden"
              id="portraitImageSection"
            >
              <Figure.Image
                className="w-100 position-relative"
                id="portraitBackground"
                src={portraitImageBackground}
                alt=""
              />
              <div className="portraitBorderBack w-50 h-50 position-absolute"></div>
              <Figure.Image
                className="w-50 portraitImage position-absolute"
                id="portrait"
                src={portraitImage}
                alt="portrait of me"
              />
            </Figure>
          </div>
        </Col>

        <Col
          xs={12}
          md={6}
          className="d-flex align-items-center justify-content-center mb-5"
        >
          <article id="portraitText">
            <hgroup>
              <h1 className="nameText1">daniil_zhelyazkov</h1>
              <h5 className="text-dark nameText2">
                my_portfolio<span className="blink">_</span>
              </h5>
            </hgroup>
          </article>
        </Col>
      </Row>
    </>
  );
}
