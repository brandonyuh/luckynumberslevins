import Header from "../../components/Header/Header";
import MainContent from "../../components/MainContent/MainContent";
import Navbar from "../../components/Navbar/Navbar";
import Creation from "../../components/Creation/Creation";
import "./Home.scss";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Link to="/number" style={{ "text-decoration": "none" }}>
        <div className="grid">
          <Navbar />
          <Header />
          <MainContent />
        </div>
      </Link>
    </>
  );
}

export default Home;
