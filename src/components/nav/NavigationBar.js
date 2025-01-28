import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./NavigationBar.scss";
import BlinkingNavLink from "./BlinkingNavLink";
import DarkModeToggle from "./DarkModeToggle";

const NavigationBar = () => {
  const [lastVisPos, setLastVisPos] = useState(0);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [expanded, setExpanded] = useState(false);

  const handleCollapse = () => {
    setExpanded(false); // collapse the navbar
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos >= currentScrollPos) {
        setVisible(true);
        setLastVisPos(currentScrollPos);
      } else if (currentScrollPos >= lastVisPos + 360) {
        setVisible(false);
        setLastVisPos(currentScrollPos);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <Navbar
      expanded={expanded}
      expand="lg"
      className={`row z-3 ${visible ? "navbar-visible" : "navbar-hidden"}`}
      sticky="top"
    >
      <Navbar.Toggle
        onClick={() => setExpanded(!expanded)}
        aria-controls="basic-navbar-nav"
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto space-evenly w-100 d-flex justify-content-between align-items-center px-5 rounded-3 shadow bg-light">
          <BlinkingNavLink onClick={handleCollapse} to="scroll-here-intro">
            about
          </BlinkingNavLink>
          <BlinkingNavLink onClick={handleCollapse} to="scroll-here-skills">
            skills
          </BlinkingNavLink>
          <BlinkingNavLink onClick={handleCollapse} to="scroll-here-education">
            education
          </BlinkingNavLink>
          <BlinkingNavLink onClick={handleCollapse} to="scroll-here-projects">
            projects
          </BlinkingNavLink>
          <NavDropdown
            title="contact_me"
            id="basic-nav-dropdown"
            className="contactInfo"
          >
            <NavDropdown.Item
              onClick={handleCollapse}
              href="mailto:daniilzhelyazkov@gmail.com"
              className="text-center"
            >
              email
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              onClick={handleCollapse}
              href="https://www.linkedin.com/in/daniil-zhelyazkov"
              className="text-center"
            >
              linkedIn
            </NavDropdown.Item>
          </NavDropdown>

          <DarkModeToggle />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
