import React from 'react';

  //Компонент ф-ый
function ImagePopup(props) {
  console.log(props, 'Компонен: POPUP IMG');


  const classOpen = props.card?.title? 'popup_opened' : '';

  return (
    <section className={`popup popup_type_img ${classOpen}`}>
      <figure className="show-img">
        <button className="show-img__btn-exit popup__btn-exit hover-opacity" onClick={props.onClose}/>
        <img className="show-img__img" src={props.card.src} alt={props.card.alt} />
        <figcaption className="show-img__text-box">
          <p className="show-img__text">{props.card.title}</p>
        </figcaption>
      </figure>
    </section>
  )
}

export default ImagePopup
