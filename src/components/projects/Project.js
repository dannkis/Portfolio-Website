import React from "react";
import "./Project.scss";

export default function Project({
  name,
  preview,
  description,
  theme,
  stackLogos,
  codeRepo,
  releaseRepo,
}) {
  var textColour = "text-dark";
  var backgroundColour = "bg-secondary";

  if (theme == 1) {
    backgroundColour = "bg-dark";
    textColour = "text-primary";
  } else if (theme == 2) {
    backgroundColour = "bg-primary";
  }

  return (
    <div className="reveal col-sm-12">
      <div className={"row " + backgroundColour + " " + textColour}>
        <h3 className="p-2 col-sm-12">{name}</h3>
        <div className="col-sm-12 col-xxl-6 d-flex flex-column align-items-center justify-content-center">
          <h3 className="d-none d-xxl-block">preview</h3>
          <img
            className="img-fluid data-enlargable project-img rounded"
            src={preview}
            alt="project1"
          />
        </div>
        <article className="col-sm-12 col-xxl-6">
          <div className="row h-100">
            <div className="col-12 col-sm-12 col-xl-12 d-flex flex-column align-items-center justify-content-center pr-0">
              <h3 className="">description</h3>
              <p className="text-justify p-3">{description}</p>
            </div>
            <div className="col-12 col-sm-12 col-xl-12 d-flex flex-column align-items-center justify-content-center">
              <h3>stack</h3>
              <div className="row w-100 justify-content-around">
                {stackLogos.map((logo) => {
                  return (
                    <div className="col col-sm-2">
                      <img
                        className={
                          "w-100 logo " + (theme == 1 ? "svg-primary" : "")
                        }
                        src={logo}
                        alt={logo + " logo"}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-12 col-sm-12 col-xxl-12 d-flex flex-column align-items-center justify-content-center">
              <h3 className="">github</h3>
              <div className="row w-100">
                <div className="col github-section d-flex justify-content-around">
                  <a
                    className="text-decoration-none h5 p-2 bg-success rounded github-button"
                    href={codeRepo}
                  >
                    Code Repo
                  </a>
                  {releaseRepo ? (
                    <a
                      className="text-decoration-none h5 p-2 bg-success rounded github-button"
                      href={releaseRepo}
                    >
                      Release Repo
                    </a>
                  ) : (
                    " "
                  )}
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
