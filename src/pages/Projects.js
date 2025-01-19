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
        <div className="col-xs-12 col-md-4 col-xl-4 col-xxl-2 d-flex justify-content-center">
          <div key={project.id} className="card project-card bg-secondary">
            <figure className="figure">
              <img
                className="card-img-top"
                src={project.image}
                alt={project.title}
              />
              <a className="btn_image btn btn-primary" alt="Image Button">
                view
              </a>
            </figure>
            <div className="card-body">
              <h2 className="card-title text-center">{project.title}</h2>
              <h6 className="card-text text-center">&lt;tools used&gt;</h6>
              <div className="card-body container-fluid">
                <div className="row justify-content-evenly">
                  {project.tools.map((tool, index) => (
                    <div className="col-sm-2">
                      <img
                        key={index}
                        src={tool}
                        alt="Tool Icon"
                        className="img-fluid tool-icon"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="card-body">
                <a href={project.codeRepo} className="btn btn-primary">
                  Code Repo
                </a>
                {project.releaseRepo && (
                  <a href={project.releaseRepo} className="btn btn-secondary">
                    Release Repo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
