import "./CategoryWidgetCreation.scss";
import SearchBox from "../../components/SearchBox/SearchBox"
import BackWhite from "../../assets/images/back_white.svg";
import Image1 from "../../assets/images/category/1.svg";
import Image2 from "../../assets/images/category/2.svg";
import Image3 from "../../assets/images/category/3.svg";
import Image4 from "../../assets/images/category/4.svg";
import Image5 from "../../assets/images/category/5.svg";
import Image6 from "../../assets/images/category/6.svg";
import Image7 from "../../assets/images/category/7.svg";
import Image8 from "../../assets/images/category/8.svg";
import Image9 from "../../assets/images/category/9.svg";
import Image10 from "../../assets/images/category/10.svg";
import Image11 from "../../assets/images/category/11.svg";
import Image12 from "../../assets/images/category/12.svg";

function CategoryWidgetCreation() {
  return (
    <>
      <div className="category__back">
        <img src={BackWhite}></img>
      </div>

      <h1 className="category__title">Create a Widget</h1>
      <p className="category__description">2. Select the category of data you want to visualize.</p>
      <p className="category__subdescription">
        1 Dataset {">"} Internal {">"} Department {">"}
      </p>
      <SearchBox></SearchBox>
      <div className="category__icons">
        <div className="category__icons--element category--blue">
          <img className="category__icons--icon" src={Image1}></img>
          <p className="category__icons--description">Distance</p>
        </div>
        <div className="category__icons--element category--blue">
          <img className="category__icons--icon" src={Image2}></img>
          <p className="category__icons--description">Satisfaction</p>
        </div>
        <div className="category__icons--element category--blue">
          <img className="category__icons--icon" src={Image3}></img>
          <p className="category__icons--description">Community</p>
        </div>
        <div className="category__icons--element category--blue">
          <img className="category__icons--icon" src={Image4}></img>
          <p className="category__icons--description">File</p>
        </div>
      </div>
      <div className="category__icons">
        <div className="category__icons--element category--blue">
          <img className="category__icons--icon" src={Image5}></img>
          <p className="category__icons--description">Experience</p>
        </div>
        <div className="category__icons--element category--blue">
          <img className="category__icons--icon" src={Image6}></img>
          <p className="category__icons--description">Home</p>
        </div>
        <div className="category__icons--element category--blue">
          <img className="category__icons--icon" src={Image7}></img>
          <p className="category__icons--description">Salary</p>
        </div>
        <div className="category__icons--element category--blue">
          <img className="category__icons--icon" src={Image8}></img>
          <p className="category__icons--description">Culture</p>
        </div>
      </div>
      <div className="category__icons">
        <div className="category__icons--element category--blue">
          <img className="category__icons--icon" src={Image9}></img>
          <p className="category__icons--description">Data</p>
        </div>
        <div className="category__icons--element category--blue">
          <img className="category__icons--icon" src={Image10}></img>
          <p className="category__icons--description">Flow</p>
        </div>
        <div className="category__icons--element category--blue">
          <img className="category__icons--icon" src={Image11}></img>
          <p className="category__icons--description">Growth</p>
        </div>
        <div className="category__icons--element category--blue">
          <img className="category__icons--icon" src={Image12}></img>
          <p className="category__icons--description">Network</p>
        </div>
      </div>
    </>
  );
}

export default CategoryWidgetCreation;
