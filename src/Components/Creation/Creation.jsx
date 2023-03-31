import "./Creation.scss";
import arrowBack from "../../assets/images/arrow-back.svg";
// import questionMark from "../../assets/images/question-mark.svg";

import React from "react";

function Creation() {
  return (
    <div className="creation">
      <div className="creation_top">
        <div className="creation_titles">
          <h1 className="creation_title">Create a Widget</h1>
          <img className="creation_arrow" src={arrowBack} alt="arrow back" />
          {/* <img
                className="creation_question"
                src={questionMark}
                alt="question mark"
              /> */}
          <div className="creation_subtitle">
            <h3 className="creation_subtitle-title">
              Select the type of insight you want to see{" "}
            </h3>
          </div>
        </div>
      </div>
      <div className="creation_boxes">
        <div className="creation_boxes__divided">
          <h2 className="creation_boxes__internal-top">Internal</h2>
        </div>
        <div className="creation_boxes__divided">
          <h2 className="creation_boxes__external-top">External</h2>
        </div>
        <div className="creation_boxes__divided">
          <h2 className="creation_boxes__internal-top">Internal</h2>
        </div>
        <div className="creation_boxes__divided">
          <h2 className="creation_boxes__external-bottom">External</h2>
        </div>
      </div>
    </div>
  );
}

export default Creation;
