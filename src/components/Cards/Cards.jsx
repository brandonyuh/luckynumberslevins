import './Cards.scss';

function Card({ imageSrc, title, text, bgColor, txtColor, width, height, fontSize, imgheight, top }) {
   return (
      <div className='card' style={{ backgroundColor: bgColor, width: width, height: height }}>
         <div className='card__container'>
            <img src={imageSrc} style={{ height: imgheight }} alt={title} className='card__container--image' />
         </div>
         <div className='card__content'>
            <h3 className='card__title' style={{ color: txtColor, fontSize: fontSize, marginTop: top }}>
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
