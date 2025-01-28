import React from "react";
import { Container, Row } from "react-bootstrap";
import NavigationBar from "./components/nav/NavigationBar.js";
import { BrowserRouter as Router } from "react-router-dom";
import Intro from "./pages/AboutMe.js";
import Skills from "./pages/Skills.js";
import Education from "./pages/Education.js";
import Projects from "./pages/Projects.js";
import "./app.scss";
import "./components/RevealOnScroll.js";

function App() {
  return (
    <Router>
      <Container fluid className="bg-light">
        <NavigationBar />
        <Intro />
        <Skills />
        <Row>
          <Container fluid>
            <Education />
            <Projects />
          </Container>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
