import React from "react";
import { Container } from "react-bootstrap";
import "./Carousel.scss";

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

const Tag = ({ tag_symbol, text, color, text_color }) => (
  <div
    className={"tag shadow non_selectable " + text_color}
    style={{ backgroundColor: color }}
  >
    <span>{tag_symbol}</span> {text}
  </div>
);

const Carousel = ({
  tag_symbol,
  TAGS,
  ROWS,
  TAGS_PER_ROW,
  DURATION,
  COLOR,
  TEXT_COLOR,
}) => {
  return (
    <Container fluid className="tag-list my-4">
      {[...new Array(ROWS)].map((_, i) => (
        <InfiniteLoopSlider
          key={i}
          duration={random(DURATION - 5000, DURATION + 5000)}
          reverse={i % 2}
        >
          {shuffle(TAGS)
            .slice(0, TAGS_PER_ROW)
            .map((tag) => (
              <Tag
                tag_symbol={tag_symbol}
                text={tag}
                key={tag}
                color={COLOR}
                text_color={TEXT_COLOR}
              />
            ))}
        </InfiniteLoopSlider>
      ))}
    </Container>
  );
};

export default Carousel;
