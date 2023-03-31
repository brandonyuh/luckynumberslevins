import './Navbar.scss';
import logo from '../../assets/logo/visier-logo.svg';
import logout from '../../assets/icons/log-out.svg';
import search from '../../assets/icons/search2.svg';
import book from '../../assets/icons/book.svg';
import graph from '../../assets/icons/graph.svg';

function Navbar() {
   return (
      <>
         <nav className='navbar'>
            <ul className='navbar__list'>
               <img src={logo} alt='Logo' className='navbar__logo' />
               <li className='navbar__item'>
                  <a href='#home' className='navbar__link'>
                     <span className='navbar__link--icon'>
                        <p className='navbar__link--text'>D</p>
                     </span>
                  </a>
               </li>
               <li className='navbar__item'>
                  <a href='#about' className='navbar__link'>
                     <span className='navbar__link--icon yellow'>
                        <p className='navbar__link--text'>S</p>
                     </span>
                  </a>
               </li>
               <li className='navbar__item'>
                  <a href='#services' className='navbar__link'>
                     <span className='navbar__link--icon purple'>
                        <p className='navbar__link--text'>H</p>
                     </span>
                  </a>
               </li>
               <li className='navbar__item'>
                  <a href='#contact' className='navbar__link'>
                     <span className='navbar__link--icon grey'>
                        <p className='navbar__link--text small'>PHJ</p>
                     </span>
                  </a>
               </li>
               <img className='navbar__icon' src={search} alt='search icon' />
               <img className='navbar__icon' src={book} alt='book icon' />
               <img className='navbar__icon' src={graph} alt='graph icon' />
            </ul>
            <img className='navbar__img' src={logout} alt='Logo' />
         </nav>
      </>
   );
}

export default Navbar;
