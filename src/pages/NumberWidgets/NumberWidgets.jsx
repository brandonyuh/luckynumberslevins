import "./NumberWidgets.scss";
import HeaderPage from "../../components/HeaderPage/HeaderPage";
import { Link } from "react-router-dom";

function NumberWidgets() {
  return (
    <div>
      <Link to="/internalorexternal" style={{ "text-decoration": "none" }}>
        <HeaderPage
          title="Create a Widget"
          subtitle="Select the amount of data sets you would like to view on the same graph. "
        ></HeaderPage>
        <div className="number--description">Number of Datasets</div>
        <div className="number--container">
          <div className="number--card">
            <div className="number--title">
              <div>1</div>
              <div className="number--subtitle">DATASET</div>
            </div>
            <div className="number--list">
              <ul>
                <li>Bar Charts</li>
                <li>Gauge Charts</li>
              </ul>
            </div>
          </div>

          <div className="number--card card2">
            <div className="number--title">
              <div>2</div>
              <div className="number--subtitle">DATASETS</div>
            </div>
            <div className="number--list">
              <ul>
                <li>Bar Charts</li>
                <li>Column Charts</li>
                <li>Combo Chart</li>
                <li>Scatter Plot</li>
                <li>Pie Charts</li>
              </ul>
            </div>
          </div>

          <div className="number--card card3">
            <div className="number--title">
              <div>3</div>
              <div className="number--subtitle">DATASETS</div>
            </div>
            <div className="number--list">
              <ul>
                <li>Waterfall Chart</li>
                <li>Histogram</li>
                <li>Spider Chart</li>
              </ul>
            </div>
          </div>

          <div className="number--card card4">
            <div className="number--title">
              <div>4</div>
              <div className="number--subtitle">DATASETS</div>
            </div>
            <div className="number--list">
              <ul>
                <li>Bar Charts</li>
                <li>Pie Charts</li>
                <li>Cake Charts</li>
                <li>Pop Charts</li>
              </ul>
            </div>
          </div>

          <div className="number--card card5">
            <div className="number--title">
              <div>5</div>
              <div className="number--subtitle">DATASETS</div>
            </div>
            <div className="number--list">
              <ul>
                <li>Up Charts</li>
                <li>Down Charts</li>
                <li>Top Charts</li>
                <li>Bottom Charts</li>
                <li>Strange Charts</li>
                <li>Charm Charts</li>
              </ul>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default NumberWidgets;
