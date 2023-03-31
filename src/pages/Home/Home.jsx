import Header from '../../components/Header/Header';
// import MainContent from "../../components/MainContent/MainContent";
import Navbar from '../../components/Navbar/Navbar';
import Creation from '../../components/Creation/Creation';
import './Home.scss';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Content from '../../components/Content/Content';

function Home() {
   return (
      <>
         <Link to='/create' style={{ 'text-decoration': 'none' }}>
            <div className='grid'>
               <Navbar />
               <Header />
               {/* <MainContent /> */}
               <Content />
            </div>
         </Link>
      </>
   );
}

export default Home;
