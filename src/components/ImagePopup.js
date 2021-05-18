import React from 'react';

  //Компонент ф-ый
function ImagePopup({ onClose, card}) {

  const classOpen = card?.title? 'popup_opened' : '';
  console.log(card, classOpen)
  return (
    <section className={`popup popup_type_img ${classOpen}`}>
      <figure className="show-img">
        <button className="show-img__btn-exit popup__btn-exit hover-opacity" onClick={onClose}/>
        <img className="show-img__img" src={card.src} alt={card.alt} />
        <figcaption className="show-img__text-box">
          <p className="show-img__text">{card.title}</p>
        </figcaption>
      </figure>
    </section>
  )
}

export default ImagePopup;
