import React from "react";
import "./Projects.scss";
import Project from "../components/projects/Project";
import RotaMaker from "../images/projects/project-rota/project-rota.png";
import WeatherApp from "../images/projects/gui-weather-app-concept/gui-weather-app-concept.png"
//General Logos
import vsCodeLogo from "../images/projects/logos/vs.svg";
import reactLogo from "../images/projects/logos/react.svg"
//RotaMaker Specific Logos
import cSharpLogo from "../images/projects/logos/c-sharp.svg";
import msAccessLogo from "../images/projects/logos/access.svg";
import dotNetLogo from "../images/projects/logos/dot-net-logo.svg";

//Weather App Specific Logos
import bootstrapLogo from "../images/projects/logos/bootstrap.svg"
import sassLogo from "../images/projects/logos/sass.svg"
import figmaLogo from "../images/projects/logos/figma.svg"



export default function Projects() {
  return (
    <div className="row reveal text-center" name="scroll-here-projects">
      <h1 className="col-sm-12 text-primary">projects</h1>
      <Project
        name="Rota Maker 4"
        preview={RotaMaker}
        description="RotaMaker 4 helps businesses in the hospitality sector to
                  create/share schedules and manage employee data easily and
                  quickly, while keeping it simple.
                  This tool makes it easier to transition from non-technical to
                  technical scheduling."
        stackLogos={[cSharpLogo, msAccessLogo, vsCodeLogo, dotNetLogo]}
        codeRepo="https://github.com/dannkis/RotaMaker-4"
        releaseRepo="https://github.com/dannkis/RotaMaker-4-RELEASE"
      />

      <div className="reveal col-sm-12" id="project1Section">
        <div className="row text-primary">
          <h4 className="p-2 col-sm-12">Rota Maker</h4>
          <article className="col-sm-6">
            <p className="text-justify">
              A specialised program designed to help businesses in the
              hospitality sector create and share schedules and manage employee
              data.
            </p>
          </article>
          <div className="col-sm-6">
            <img
              className="img-fluid project-img"
              src={RotaMaker}
              alt="project1"
            />
          </div>
          <div className="col-sm-12">LINK1 LINK 2</div>
        </div>
      </div>

      <Project
        name="Agronova"
        preview={WeatherApp}
        description="Crop Farmers Weather Web-App, a comprehensive tool designed to empower farmers with essential weather insights for optimized crop management. This user-friendly application integrates real-time meteorological data with advanced analytics, offering personalized forecasts and actionable recommendations tailored to specific crops and regions."
        stackLogos={[vsCodeLogo, bootstrapLogo, sassLogo, figmaLogo, reactLogo]}
        codeRepo="https://github.com/dannkis/RotaMaker-4"
        releaseRepo="https://github.com/dannkis/RotaMaker-4-RELEASE"
      />
    </div>
  );
}
