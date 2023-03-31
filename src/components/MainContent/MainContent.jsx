import './MainContent.scss';
import widget from '../../assets/icons/widget.svg';

function MainContent() {
   return (
      <main className='main'>
         <div className='main__content'>
            <h3 className='main__content--title'>Your dashboard is empty.</h3>
            <div className='main__widget'>
               <img className='main__widget--img' src={widget} alt='add widget' />
               <p className='main__widget--text'>Add your first widget.</p>
            </div>
         </div>
      </main>
   );
}

export default MainContent;
