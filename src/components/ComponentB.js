import React from "react";

const ComponentB = (props) => {
  const { cendol, handleIncremet, handleColorChange, colorCode } = props;
  return (
    <div className="counter-main">
      <div className="counter-body">
        <div className="counter-circle" style={{ backgroundColor: colorCode ? colorCode : "#FCC200" }}>
          <h1>{cendol.toString().length === 1 ? cendol : cendol}</h1>
          <span className="btn-counter" onClick={handleIncremet}>
            Click to increase counter
          </span>
        </div>
      </div>
      <div className="btn-color-body">
        <button
          className="btn-color-change"
          onClick={handleColorChange}
          style={{ backgroundColor: colorCode }}>
          Change Color
        </button>
      </div>
    </div>
  );
};

export default ComponentB;