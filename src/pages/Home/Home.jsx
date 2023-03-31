import Header from "../../components/Header/Header";
import MainContent from "../../components/MainContent/MainContent";
import Navbar from "../../components/Navbar/Navbar";
import Creation from "../../components/Creation/Creation";
import "./Home.scss";

function Home() {
  return (
    <div className="grid">
      <Navbar />
      <Header />
      <MainContent />
    </div>
  );
}

export default Home;
