import "./Creation.scss";
import arrowBack from "../../assets/images/arrow-back.svg";
// import questionMark from "../../assets/images/question-mark.svg";
import calculator from "../../assets/images/map_accounting.svg";

import React from "react";

function Creation() {
  return (
    <div className="creation">
      <div className="creation_top">
        <div className="creation_titles">
          <h1 className="creation_title">Select a Location / Department</h1>
          <img className="creation_arrow" src={arrowBack} alt="arrow back" />
          {/* <img
                className="creation_question"
                src={questionMark}
                alt="question mark"
              /> */}
          <div className="creation_subtitle">
            <h3 className="creation_subtitle-title">
              Select the type of insight you want to see
            </h3>
          </div>
        </div>
      </div>
      <div className="creation__boxes">
        <div className="creation__boxes-left">
          <div className="creation__boxes-left-content">
            <p className="creation__boxes-left-content-text">
              Accounting
              <img src={calculator} alt="calculator" />
            </p>
            <p className="creation__boxes-left-content-text">Sales</p>
            <p className="creation__boxes-left-content-text">Marketing</p>
            <p className="creation__boxes-left-content-text">R&D</p>
          </div>
        </div>
        <div className="creation__boxes-right">
          <p className="creation__boxes-right-text">Accounting</p>
          <p className="creation__boxes-right-text">Sales</p>
          <p className="creation__boxes-right-text">Marketing</p>
          <p className="creation__boxes-right-text">R&D</p>
        </div>
      </div>
    </div>
  );
}

export default Creation;
