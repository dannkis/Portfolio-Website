import React from "react";
import "./Project.scss";

export default function Project({
  name,
  preview,
  description,
  theme,
  layout,
  stackLogos,
  codeRepo,
  releaseRepo,
}) {
  const textColour = theme === 1 ? "text-primary" : "text-dark";
  const backgroundColour =
    theme === 1 ? "bg-dark" : theme === 2 ? "bg-primary" : "bg-secondary";

  const ImageSection = () => (
    <div className="col-sm-12 col-xxl-6 d-flex flex-column align-items-center justify-content-center h-100">
      <h3 className="d-none d-xxl-block">Preview</h3>
      <img
        className="img-fluid data-enlargable project-img rounded"
        src={preview}
        alt={`${name} preview`}
      />
    </div>
  );

  const DescriptionSection = () => (
    <article className="col-sm-12 col-xxl-6 h-100">
      <div className="row h-100">
        <div className="col-12 d-flex flex-column align-items-center justify-content-center pr-0">
          <h3>Description</h3>
          <p className="text-justify p-3">{description}</p>
        </div>
        <div className="col-12 d-flex flex-column align-items-center justify-content-center">
          <h3>Stack</h3>
          <div className="row w-100 justify-content-around">
            {stackLogos.map((logo, index) => (
              <div key={index} className="col col-sm-2">
                <img
                  className={`w-100 logo ${theme === 1 ? "svg-primary" : ""}`}
                  src={logo}
                  alt={`${logo} logo`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="col-12 d-flex flex-column align-items-center justify-content-center">
          <h3>GitHub</h3>
          <div className="row w-100">
            <div className="col github-section d-flex justify-content-around">
              <a
                className="text-decoration-none h5 p-2 bg-success rounded github-button"
                href={codeRepo}
              >
                Code Repo
              </a>
              {releaseRepo && (
                <a
                  className="text-decoration-none h5 p-2 bg-success rounded github-button"
                  href={releaseRepo}
                >
                  Release Repo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );

  return (
    <div
      className={`reveal col-sm-12 min-vh-100 d-flex align-content-center ${backgroundColour} ${textColour}`}
    >
      <div className="row">
        <h1 className="col-sm-12 d-flex align-items-center justify-content-center max-h-2em">
          {name}
        </h1>
        {layout === 0 ? (
          <>
            <ImageSection />
            <DescriptionSection />
          </>
        ) : (
          <>
            <DescriptionSection />
            <ImageSection />
          </>
        )}
      </div>
    </div>
  );
}
