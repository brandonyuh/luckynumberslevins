import './Navbar.scss';
import logo from '../../assets/logo/visier-logo.svg';
import logout from '../../assets/icons/log-out.svg';

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
            </ul>
            <img className='navbar__img' src={logout} alt='Logo' />
         </nav>
      </>
   );
}

export default Navbar;
