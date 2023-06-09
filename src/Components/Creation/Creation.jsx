import "./Creation.scss";
import HeaderPage from "../HeaderPage/HeaderPage";
import arrowBack from "../../assets/images/arrow-back.svg";
// import questionMark from "../../assets/images/question-mark.svg";
import calculator from "../../assets/images/map_accounting.svg";
import arrowGrow from "../../assets/images/fluent_arrow-growth-20-filled.svg";
import happyFace from "../../assets/images/happy-face.svg";
import lab from "../../assets/images/lab-research.svg";
import money from "../../assets/images/money.svg";
import operations from "../../assets/images/carbon_data-class.svg";
import management from "../../assets/images/management.svg";
import people from "../../assets/images/ant-design_team-outlined.svg";

import React from "react";
import { Link } from "react-router-dom";

function Creation() {
  return (
    <div className="creation">
      <Link to="/selectcategory" style={{ "text-decoration": "none" }}>
        <HeaderPage
          title="Select a Location / Department"
          subtitle="Select the type of insight you want to see
"
        />

        <div className="creation__boxes">
          <div className="creation__boxes-left">
            <div className="creation__boxes-left-content">
              <p className="creation__boxes-left-content-text">
                ACCOUNTING
                <img
                  className="creation__boxes-left-content-text-img"
                  src={calculator}
                  alt="calculator"
                />
              </p>
              <p className="creation__boxes-left-content-text">
                SALES
                <img
                  className="creation__boxes-left-content-text-img"
                  src={arrowGrow}
                  alt="arrow grow"
                />
              </p>
              <p className="creation__boxes-left-content-text">
                MARKETING
                <img
                  className="creation__boxes-left-content-text-img"
                  src={happyFace}
                  alt="happy face"
                />
              </p>
              <p className="creation__boxes-left-content-text">
                R&D
                <img
                  className="creation__boxes-left-content-text-img"
                  src={lab}
                  alt="lab"
                />
              </p>
            </div>
          </div>
          <div className="creation__boxes-right">
            <p className="creation__boxes-right-text">
              FINANCE
              <img
                className="creation__boxes-left-content-text-img"
                src={money}
                alt="finance"
              />
            </p>
            <p className="creation__boxes-right-text">
              PEOPLE
              <img
                className="creation__boxes-left-content-text-img"
                src={people}
                alt="people"
              />
            </p>
            <p className="creation__boxes-right-text">
              OPERATIONS
              <img
                className="creation__boxes-left-content-text-img"
                src={operations}
                alt="operations"
              />
            </p>
            <p className="creation__boxes-right-text">
              MANAGEMENT
              <img
                className="creation__boxes-left-content-text-img"
                src={management}
                alt="management"
              />
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Creation;
