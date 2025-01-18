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
  ];

  return (
    <div className="min-vh-100 row justify-content-center">
      <div className="col-xs-12">
        {" "}
        <h3 className="text-secondary text-center scroll-here-projects">
          projects
        </h3>
      </div>

      {projectData.map((project) => (
        <div className="col-xs-12 col-md-6 col-xl-3">
          <div key={project.id} className="card bg-secondary border-none">
            <figure className="figure">
              <img
                className="card-img-top"
                src={project.image}
                alt={project.title}
              />
              <div className="play_button_wrapperr">
                <img
                  src="https://raw.githubusercontent.com/NaveenPantra/card_ui_interaction/master/play.png"
                  className="play_btn_image"
                  alt="Play Button"
                />
              </div>
            </figure>
            <div className="description">
              <div className="details_container">
                <h2 className="text-center">{project.title}</h2>
                <div className="game_detailss">
                  <div className="tools_section">
                    <h6 className="tools_title">&lt;tools used&gt;</h6>
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
        </div>
      ))}
    </div>
  );
}
