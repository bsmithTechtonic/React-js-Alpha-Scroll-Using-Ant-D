import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Slider } from "antd";

const alphabet = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

const scrollToSection = e => {
  const letter = alphabet[Math.floor(e) - 1];
  var element = document.getElementById(`section-${letter}`);
  element.scrollIntoView();
};

const renderSections = () => {
  return alphabet.map(letter => {
    const id = `section-${letter}`;
    return (
      <div id={id} style={{ width: "80vw" }}>
        <div style={{ background: "gray", color: "white", paddingLeft: 10 }}>
          {letter}
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    );
  });
};

const renderAlphaScrollMarks = () => {
  const marksObj = {};
  for (let index = 0; index < alphabet.length; index++) {
    marksObj[index + 1] = {
      style: {
        transform: "translate(-15px, -10px)",
        color: "black",
        pointerEvents: "none"
      },
      label: alphabet[index]
    };
  }
  return marksObj;
};

ReactDOM.render(
  <div style={{ display: "flex" }}>
    <div>{renderSections()}</div>
    <Slider
      style={{
        position: "fixed",
        top: "5vh",
        right: "3vw",
        height: "80vh",
        userSelect: "none"
      }}
      vertical={true}
      min={1}
      max={26}
      reverse
      step={0.01}
      tipFormatter={null}
      marks={renderAlphaScrollMarks()}
      onChange={scrollToSection}
    />
  </div>,
  document.getElementById("container")
);
