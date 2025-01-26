import React, { useState, useEffect } from "react";
import "./Education.scss";
import { Row, Container, Card, Col, Carousel } from "react-bootstrap";
import virtualExperience from "../images/certificates/virtualCertificate.jpg";
import javaCertificate from "../images/certificates/javaCertificate.jpg";
import javascriptCertificate from "../images/certificates/jsCertificate.jpg";
import level2Certificate from "../images/certificates/level2Certificate.jpg";
import matrixCertificate from "../images/certificates/matrixCertificate.jpg";
import cSharpCertificate from "../images/certificates/cSharpCertificate.jpg";

export default function Education() {
  const [modal, setModal] = useState(false);
  const [modalImg, setModalImg] = useState("");
  const [modalCaption, setModalCaption] = useState("");

  const openModal = (imageSrc, caption) => {
    setModalImg(imageSrc);
    setModalCaption(caption);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modal]);
  const certificates = [
    {
      certificate: virtualExperience,
      name: "web development virtual experience program",
    },
    {
      certificate: javaCertificate,
      name: "java tutorial course",
    },
    {
      certificate: javascriptCertificate,
      name: "javascript tutorial course",
    },
    {
      certificate: level2Certificate,
      name: "diploma in ict systems and principles for it professionals",
    },
    {
      certificate: matrixCertificate,
      name: "matrix challenge 2020",
    },
    {
      certificate: cSharpCertificate,
      name: "c# intermediate",
    },
  ];

  return (
    <>
      <Row>
        <Col>
          <Container fluid>
            <Row>
              <Col>
                <h3
                  className="text-secondary text-center"
                  id="scroll-here-education"
                >
                  education
                </h3>
              </Col>
            </Row>
            <Row className="align-items-center">
              <Col
                xs={12}
                lg={6}
                className="d-flex justify-content-center align-items-center"
              >
                <section>
                  <article>
                    <hgroup>
                      <h4 className="text-secondary">2022 - PRESENT</h4>
                      <p>
                        BSc (Hons) Computer Science at Queen Mary University of
                        London, London.
                      </p>
                    </hgroup>
                    <hgroup>
                      <h4 className="text-secondary">2021 - 2022</h4>
                      <p>
                        A Level Computer Science, A Level English Language, A
                        Level Mathematics at Exeter College, Exeter.
                      </p>
                    </hgroup>
                    <hgroup>
                      <h4 className="text-secondary">2020 - 2021</h4>
                      <p>
                        AS Level Computer Science, AS Level English Language, AS
                        Level Mathematics at Exeter College, Exeter.
                      </p>
                    </hgroup>
                    <hgroup>
                      <h4 className="text-secondary">2019 - 2020</h4>
                      <p>
                        BTEC Level 2 Computing at South Devon College, Paignton.
                      </p>
                    </hgroup>
                  </article>
                </section>
              </Col>
              <Col
                xs={12}
                lg={6}
                className="d-flex justify-content-center align-items-center"
                data-bs-theme="dark"
              >
                <Carousel className="w-100">
                  {(() => {
                    const items = [];
                    for (let i = 0; i < certificates.length; i += 3) {
                      const certGroup = certificates.slice(i, i + 3);

                      items.push(
                        <Carousel.Item key={i} className="my-4">
                          <Container fluid>
                            <Row className="justify-content-center">
                              {certGroup.map((cert, idx) => (
                                <Col xs={4} key={idx} className="px-3 py-4">
                                  <Card
                                    className="rounded-5 shadow h-100 show-cursor card-certificate"
                                    onClick={() =>
                                      openModal(cert.certificate, cert.name)
                                    }
                                  >
                                    <Card.Img
                                      variant="top"
                                      className="card-img-max-h-1 rounded-top-5"
                                      src={cert.certificate}
                                      alt={cert.name}
                                    />
                                    <Card.Body className="bg-secondary text-dark rounded-bottom-5">
                                      <Card.Title className="h-100 d-flex justify-content-center align-items-center text-center">
                                        {cert.name}
                                      </Card.Title>
                                    </Card.Body>
                                  </Card>
                                </Col>
                              ))}
                            </Row>
                          </Container>
                        </Carousel.Item>
                      );
                    }
                    return items;
                  })()}
                </Carousel>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      {/* Modal */}
      {modal && (
        <div
          className="custom-modal"
          style={{
            display: modal ? "block" : "none",
          }}
          onClick={closeModal}
        >
          <div className="h-100 w-100 d-flex flex-column justify-content-center align-items-center">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <img
              className="custom-modal-content rounded-5"
              src={modalImg}
              alt={modalCaption}
            />
            <div id="caption">{modalCaption}</div>
          </div>
        </div>
      )}
    </>
  );
}
