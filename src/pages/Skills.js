import React from "react";
import Carousel from "../components/carousel/Carousel.js";

const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

export default function Skills() {
  return (
    <div className="d-flex row reveal skillsSection bg-primary" id="scroll-here-skills">
      <div className="d-flex flex-column col col-sm-12 col-lg-4 skills-section align-items-stretch">
        <div className="d-flex flex-column p-4 bg-secondary rounded h-100 mt-4">
          <article>
            <h3 className="text-center">programming</h3>
            <p>
              I have experience in using web dev technologies such as CSS, and
              PHP. With these skills, I can create visually appealing and
              interactive websites and web applications, as well as work with
              databases.
            </p>
          </article>
            <div className="d-flex align-items-end h-100">
              <Carousel
                tag_symbol={"#"}
                TAGS={[
                  "c#",
                  "java",
                  "python",
                  "php",
                  "javascript",
                  "react.js",
                  "sass",
                  "bootstrap",
                  "node.js",
                ]}
                ROWS={2}
                TAGS_PER_ROW={5}
                DURATION={30000}
              />
          </div>
        </div>
      </div>

      <div className="col col-sm-12 col-lg-4 skills-section d-flex flex-column justify-content-center align-items-center">
      <h1 className="text-center pb-2">skills</h1>
        <div className="p-4 bg-success rounded mt-4" id="section2">
          <article>
            <h3 className="text-center">problem-solving</h3>
            <p>
              I have a keen attention to detail and am skilled in identifying
              patterns and trends that can help me to diagnose issues. I am also
              able to work collaboratively with others to brainstorm ideas and
              develop strategies for overcoming obstacles.
            </p>
          </article>
        </div>
      </div>

      <div className="col col-sm-12 col-lg-4 h-100 skills-section">
        <div className="p-4 h-100 bg-secondary rounded mt-4">
          <article>
            <h3 className="text-center">tools</h3>
            <p>
              I have experience with wide variety of software tools, some of
              which are Visual Studio, GitHub, Access Databases and Git. I am
              able to appropriately find the right tools required for the proper
              execution of specific tasks.
            </p>
          </article>
          <Carousel
            tag_symbol={"#"}
            TAGS={["vs", "github", "vscode", "figma", "access", "netbeans"]}
            ROWS={2}
            TAGS_PER_ROW={5}
            DURATION={30000}
          />
        </div>
      </div>
    </div>
  );
}
