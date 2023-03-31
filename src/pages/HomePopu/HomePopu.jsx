import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import './HomePopu.scss';
import { Link } from 'react-router-dom';
import Content from '../../components/Content/Content';

function Home() {
   return (
      <>
         <Link to='/number' style={{ 'text-decoration': 'none' }}>
            <div className='grid'>
               <Navbar />
               <Header />
               <Content />
            </div>
         </Link>
      </>
   );
}

export default Home;
