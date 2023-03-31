import "./InternalExternal.scss";
import arrowBack from "../../assets/images/arrow-back.svg";
import questionMark from "../../assets/images/question-mark.svg";
import { Link } from "react-router-dom";

function InternalExternal() {
  return (
    <div className="container">
      <div className="container_top">
        <div className="container_titles">
          <h1 className="container_title">First Data Set</h1>
          <img className="container_arrow" src={arrowBack} alt="arrow back" />
          {/* <img
            className="container_question"
            src={questionMark}
            alt="question mark"
          /> */}
          <div className="container_subtitle">
            <h3 className="container_subtitle-title">
              Select the type of insight you want to see
            </h3>
          </div>
        </div>
      </div>
      <div className="container_boxes">
        <div className="container_internal">
          <div className="container_internal-title">Internal</div>
          <p className="container_internal-text">
            Internal data is facts and information that come directly from the
            company's systems and are specific to us.
          </p>
        </div>

        <div className="container_external">
          <div className="container_external-title">External</div>
          <p className="container_external-text">
            External data (also known as “alternative” or “third-party” data) is
            any data that an entity acquires beyond its four walls.
          </p>
        </div>
      </div>
    </div>
  );
}

export default InternalExternal;
