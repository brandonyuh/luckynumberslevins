import './HeaderPage.scss';

function HeaderPage({ arrowBack, questionMark }) {
   return (
      <div className='container__top'>
         <img className='container__img' src={arrowBack} alt='arrow back' />
         <div className='container__titles'>
            <h1 className='container__title'>First Data Set</h1>
            <h3 className='container__subtitle--title'>Select the type of insight you want to see</h3>
         </div>
         <div className='container__question'>
            <img className='container__question--img' src={questionMark} alt='question mark' />
         </div>
      </div>
   );
}
export default HeaderPage;
