import './Cards.scss';

function Card({ imageSrc, title, text, bgColor, txtColor }) {
   return (
      <div className='card' style={{ backgroundColor: bgColor }}>
         <div className='card__container'>
            <img src={imageSrc} alt={title} className='card__container--image' />
         </div>
         <div className='card__content'>
            <h3 className='card__title' style={{ color: txtColor }}>
               {title}
            </h3>
            <p className='card__text' style={{ color: txtColor }}>
               {text}
            </p>
         </div>
      </div>
   );
}

export default Card;
