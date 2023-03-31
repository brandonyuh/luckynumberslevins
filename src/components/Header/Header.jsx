import './Header.scss';
import share from '../../assets/icons/share.svg';
import bookmark from '../../assets/icons/bookmark.svg';
import download from '../../assets/icons/download.svg';

function Header() {
   return (
      <header className='header'>
         <div className='header__text'>
            <h1 className='header__title'>Dashboard</h1>
            <h3 className='header__subtitle'>Drake's dashboard for talent</h3>
         </div>
         <div className='header__icons'>
            <img className='header__icons--img' src={download} alt='download icon' />
            <img className='header__icons--img' src={bookmark} alt='bookmark icon' />
            <img className='header__icons--img' src={share} alt='share icon' />
         </div>
      </header>
   );
}

export default Header;
