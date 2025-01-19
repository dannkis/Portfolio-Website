import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Nav } from "react-bootstrap";

const BlinkingNavLink = ({ to, children, onClick, ...rest }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Nav.Link {...rest}>
      <ScrollLink
        onClick={onClick}
        to={to}
        spy={true}
        smooth={true}
        duration={0}
        activeClass="active"
        className="nav-link text-dark"
        onSetActive={() => setIsActive(true)}
        onSetInactive={() => setIsActive(false)}
      >
        {children}
        <span className={isActive ? "blink" : "hide"}>_</span>
      </ScrollLink>
    </Nav.Link>
  );
};

export default BlinkingNavLink;
