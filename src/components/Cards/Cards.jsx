import './Cards.scss';

function Card({ imageSrc, title, text }) {
   return (
      <div className='card'>
         <div className='card__container'>
            <img src={imageSrc} alt={title} className='card__container--image' />
         </div>
         <div className='card__content'>
            <h3 className='card__title'>{title}</h3>
            <p className='card__text'>{text}</p>
         </div>
      </div>
   );
}

export default Card;
