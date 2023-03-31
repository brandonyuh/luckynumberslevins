import './HeaderPage.scss';
import arrowBack from '../../assets/images/arrow-back.svg';
import questionMark from '../../assets/images/question-mark.svg';

function HeaderPage({ title, subtitle }) {
   return (
      <div className='container__top'>
         <img className='container__img' src={arrowBack} alt='arrow back' />
         <div className='container__titles'>
            <h1 className='container__title'>{title}</h1>
            <h3 className='container__subtitle'>{subtitle}</h3>
         </div>
         <div className='container__question'>
            <img className='container__question--img' src={questionMark} alt='question mark' />
         </div>
      </div>
   );
}
export default HeaderPage;
