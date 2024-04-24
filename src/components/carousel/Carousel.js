import React from "react";
import "./Carousel.scss"


const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
  return (
    <div
      className="loop-slider"
      style={{
        "--duration": `${duration}ms`,
        "--direction": reverse ? "reverse" : "normal",
      }}
    >
      <div className="inner">
        {children}
        {children}
      </div>
    </div>
  );
};

const Tag = ({ tag_symbol ,text }) => (
  <div className="tag">
    <span>{tag_symbol}</span> {text}
  </div>
);

const Carousel = ({tag_symbol, TAGS, ROWS, TAGS_PER_ROW, DURATION}) => {
  return (
    <div className="tag-list container-fluid">
      {[...new Array(ROWS)].map((_, i) => (
        <InfiniteLoopSlider
          key={i}
          duration={random(DURATION - 5000, DURATION + 5000)}
          reverse={i % 2}
        >
          {shuffle(TAGS)
            .slice(0, TAGS_PER_ROW)
            .map((tag) => (
              <Tag tag_symbol={tag_symbol} text={tag} key={tag} />
            ))}
        </InfiniteLoopSlider>
      ))}
      <div className="fade" />
    </div>
  );
}

export default Carousel;
