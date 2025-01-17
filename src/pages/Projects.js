import React from "react";
import "./Projects.scss";
import RotaMaker from "../images/projects/rota-maker/preview.png";
import WeatherApp from "../images/projects/weather-app/preview.png";
import CryptoWalletApp from "../images/projects/crypto-wallet/preview.png";

// Tool Icons
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
  ];

  return (
    <div className="min-vh-100">
      {projectData.map((project) => (
        <div key={project.id} className="card">
          <figure className="figuree">
            <img className="image" src={project.image} alt={project.title} />
            <figcaption className="play_button_wrapper">
              <img
                src="https://raw.githubusercontent.com/NaveenPantra/card_ui_interaction/master/play.png"
                className="play_btn_image"
                alt="Play Button"
              />
            </figcaption>
          </figure>
          <div className="description">
            <div className="details_container">
              <h5 className="card_title">{project.title}</h5>
              <div className="game_details">
                <div className="tools_section">
                  <h6 className="tools_title">Tools Used</h6>
                  <div className="tools_icons">
                    {project.tools.map((tool, index) => (
                      <img
                        key={index}
                        src={tool}
                        alt="Tool Icon"
                        className="tool_icon"
                      />
                    ))}
                  </div>
                </div>
                <div className="button_section">
                  <a
                    href={project.codeRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Code Repo
                  </a>
                  {project.releaseRepo && (
                    <a
                      href={project.releaseRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      Release Repo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
