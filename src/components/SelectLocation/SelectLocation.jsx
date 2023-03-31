import "./SelectLocation.scss";

// import { Link } from 'react-router-dom';
import externalIcon from "../../assets/icons/external.svg";
import internalIcon from "../../assets/icons/internal.svg";
import HeaderPage from "../HeaderPage/HeaderPage";
import { Link } from "react-router-dom";

function SelectLocation() {
  return (
    <div className="container">
      <Link to="/selectlocation" style={{ "text-decoration": "none" }}>
        <HeaderPage
          title="First Data Set"
          subtitle="Select the type of insight you want to see
"
        />
        <div className="container__boxes">
          <div className="container__internal">
            <div className="container__internal--title">
              <h1>Internal</h1>
              <img className="container__internal--img" src={internalIcon} alt="internal icon" />
            </div>
            <p className="container__internal--text">Internal data is facts and information that come directly from the company's systems and are specific to us.</p>
          </div>

          <div className="container__external">
            <div className="container__external--title">
              <h1>External</h1>
              <img className="container__internal--img" src={externalIcon} alt="internal icon" />
            </div>
            <p className="container__external--text">External data (also known as “alternative” or “third-party” data) is any data that an entity acquires beyond its four walls.</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default SelectLocation;
