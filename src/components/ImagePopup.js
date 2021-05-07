import React from 'react';

  //Компонент ф-ый
function ImagePopup(props) {
  //console.log(props, 'Компонен: POPUP IMG');


  const classOpen = props.card? 'popup_opened':''

  return (
    <section className={`popup popup_type_img ${classOpen}`}>
      <figure className="show-img">
        <button className="show-img__btn-exit popup__btn-exit hover-opacity" type="reset" onClick={props.onClose}/>
        <img className="show-img__img" src={props.cardData.src} alt={props.cardData.alt} />
        <figcaption className="show-img__text-box">
          <p className="show-img__text">{props.cardData.title}</p>
        </figcaption>
      </figure>
    </section>
  )
}

export default ImagePopup;
