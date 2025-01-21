import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function CircuitBoard() {
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
                <Col className="px-0"></Col>
                <Col className="px-0"></Col>
                <Col className="px-0"></Col>
                <Col className="px-0"></Col>
                <Col className="px-0"></Col>
                <Col className="px-0"></Col>
              </Row>
              <Row>
                <Col className="d-flex justify-content-end align-items-center position-relative px-0">
                  <div className="line bg-dark vertical rounded"></div>
                  <div className="dot bg-primary big top right d-flex justify-content-center align-items-center">
                    <div className="dot small bg-success"></div>
                  </div>
                </Col>
                <Col className="d-flex justify-content-center align-items-top position-relative px-0">
                  <div className="line bg-dark horizontal rounded"></div>
                </Col>
                <Col className="d-flex justify-content-start align-items-center position-relative px-0">
                  <div className="line bg-dark vertical rounded"></div>
                  <div className="dot bg-primary big top left d-flex justify-content-center align-items-center">
                    <div className="dot small bg-success"></div>
                  </div>
                </Col>
                <Col className="d-flex justify-content-end align-items-top position-relative px-0">
                  <div className="line bg-dark vertical rounded"></div>
                  <div className="dot bg-primary big top right d-flex justify-content-center align-items-center">
                    <div className="dot small bg-success"></div>
                  </div>
                </Col>
                <Col className="d-flex justify-content-center align-items-top position-relative px-0">
                  <div className="line bg-dark horizontal rounded"></div>
                </Col>
                <Col className="d-flex justify-content-start align-items-center position-relative px-0">
                  <div className="line bg-dark vertical rounded"></div>
                  <div className="dot bg-primary big top left d-flex justify-content-center align-items-center">
                    <div className="dot small bg-success"></div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col className="d-flex justify-content-center align-items-top position-relative px-0">
                  <div className="line bg-dark horizontal rounded overflow-hidden">
                    <div className="bg-primary position-absolute laser-line rounded"></div>
                  </div>
                  <div className="dot bg-primary big top right d-flex justify-content-center align-items-center">
                    <div className="dot small bg-success"></div>
                  </div>
                  <div className="dot bg-primary big top left d-flex justify-content-center align-items-center">
                    <div className="dot small bg-success"></div>
                  </div>
                </Col>
                <Col className="px-0"></Col>
                <Col className="d-flex justify-content-between align-items-center position-relative px-0">
                  <div className="line bg-dark vertical rounded"></div>
                  <div className="dot bg-primary big top left d-flex justify-content-center align-items-center">
                    <div className="dot small bg-success"></div>
                  </div>
                  <div className="line bg-dark vertical rounded"></div>
                  <div className="dot bg-primary big top right d-flex justify-content-center align-items-center">
                    <div className="dot small bg-success"></div>
                  </div>
                </Col>
                <Col className="d-flex justify-content-center align-items-top position-relative px-0">
                  <div className="line bg-dark horizontal rounded"></div>
                  <div className="dot bg-primary big top right d-flex justify-content-center align-items-center">
                    <div className="dot small bg-success"></div>
                  </div>
                </Col>
                <Col className="px-0"></Col>
                <Col className="d-flex justify-content-center align-items-top position-relative px-0">
                  <div className="line bg-dark horizontal rounded"></div>
                  <div className="dot bg-primary big top left d-flex justify-content-center align-items-center">
                    <div className="dot small bg-success"></div>
                  </div>
                  <div className="dot bg-primary big top right d-flex justify-content-center align-items-center">
                    <div className="dot small bg-success"></div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col className="px-0"></Col>
                <Col className="px-0"></Col>
                <Col className="d-flex justify-content-center align-items-top position-relative px-0">
                  <div className="dot bg-primary big bottom left d-flex justify-content-center align-items-center">
                    <div className="dot small bg-success"></div>
                  </div>
                  <div className="line bg-dark horizontal rounded"></div>
                  <div className="dot bg-primary big bottom right d-flex justify-content-center align-items-center">
                    <div className="dot small bg-success"></div>
                  </div>
                </Col>
                <Col className="px-0"></Col>
                <Col className="px-0"></Col>
                <Col className="px-0"></Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
