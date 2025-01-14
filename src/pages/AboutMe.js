import React from "react";
import "./AboutMe.scss";
import portraitImage from "../images/portraitImage2-cr2.png";
import portraitImageBackground from "../images/blob.svg";
import { Helmet } from "react-helmet";
export default function AboutMe() {
  //Testing the automatic build
  return (
    <div className="row min-vh-100" name="scroll-here-intro">
      <div className="col-12 col-md-6">
        <figure
          className="user-select-none d-flex justify-content-center align-items-center position-relative  overflow-hidden"
          id="portraitImageSection"
        >
          <img
            className="w-100 position-relative"
            id="portraitBackground"
            src={portraitImageBackground}
            alt=""
          />
          <div className="portraitBorderBack w-50 h-50 position-absolute"></div>
          <img
            className="w-50 portraitImage position-absolute"
            id="portrait"
            src={portraitImage}
            alt="portrait of me"
          />
        </figure>
      </div>
      <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
        <article id="portraitText">
          <hgroup>
            <h1 className="nameText1">daniilZhelyazkov</h1>
            <h5 className="text-white nameText2">
              myPortfolio<span className="blink">_</span>
            </h5>
          </hgroup>
        </article>
      </div>
    </div>
  );
}
