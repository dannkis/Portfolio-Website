import React from "react";
import NavigationBar from "./components/nav/NavigationBar.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Intro from "./pages/AboutMe.js";
import Skills from "./pages/Skills.js";
import Education from "./pages/Education.js";
import Projects from "./pages/Projects.js";
import "./app.scss";
import "./custom.scss";
import "./components/RevealOnScroll.js";
import { Helmet } from "react-helmet";
// Bootstrap CSS

function App() {
  return (
    <Router>
      <div className="container-fluid bg-light">
        <NavigationBar />
        <Intro />
        <Skills />
        <Education />
        <Projects />
      </div>
    </Router>
  );
}

export default App;
