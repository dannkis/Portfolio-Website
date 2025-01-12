import React from "react";
import "./Education.scss";
import virtualExperience from "../images/certificates/virtualCertificate.jpg";
import javaCertificate from "../images/certificates/javaCertificate.jpg";
import javascriptCertificate from "../images/certificates/jsCertificate.jpg";
import level2Certificate from "../images/certificates/level2Certificate.jpg";
import matrixCertificate from "../images/certificates/matrixCertificate.jpg";
import Certificate from "../components/education/Certificate";

export default function Education() {
  return (
    <div
      className="d-flex reveal row text-primary educationAndCertificates"
      name="scroll-here-education"
    >
      <section className="col-12 col-sm-12 col-lg-6 d-flex flex-column align-items-start limiter">
        <article>
          <h3 className="text-secondary text-center">education</h3>
          <hgroup>
            <h4 className="text-secondary">2022 - PRESENT</h4>
            <p>
              BSc (Hons) Computer Science at Queen Mary University of London,
              London.
            </p>
          </hgroup>
          <hgroup>
            <h4 className="text-secondary">2021 - 2022</h4>
            <p>
              A Level Computer Science, A Level English Language, A Level
              Mathematics at Exeter College, Exeter.
            </p>
          </hgroup>
          <hgroup>
            <h4 className="text-secondary">2020 - 2021</h4>
            <p>
              AS Level Computer Science, AS Level English Language, AS Level
              Mathematics at Exeter College, Exeter.
            </p>
          </hgroup>
          <hgroup>
            <h4 className="text-secondary">2019 - 2020</h4>
            <p>BTEC Level 2 Computing at South Devon College, Paignton.</p>
          </hgroup>
        </article>
      </section>
      <section className="col-12 col-sm-12 col-lg-6 flex-column d-flex justify-content-center text-center">
        <article className="text-secondary">
          <h3 className="text-secondary">certificates</h3>
          <ul className="list-inline">
            <li>
              <Certificate
                name="Web Development Virtual Experience Program Certificate."
                preview={virtualExperience}
              />
            </li>
            <li>
              <Certificate
                name="Java Tutorial Course Certificate."
                preview={javaCertificate}
              />
            </li>
            <li>
              <Certificate
                name="JavaScript Tutorial Course Certificate."
                preview={javascriptCertificate}
              />
            </li>
            <li>
              <Certificate
                name="Level 2 Diploma in ICT Systems and Principles for IT
                Professionals."
                preview={level2Certificate}
              />
            </li>
            <li>
              <Certificate
                name="Matrix Challenge 2020 Participants Certificate.
                Level 2 Diploma in ICT Systems and Principles for IT
                  Professionals."
                preview={matrixCertificate}
              />
            </li>
          </ul>
        </article>
      </section>
    </div>
  );
}
