import React from "react";

import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
  // console.log(props, 'Компонен: CARD');

  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = props.ownerId === currentUser._id;
  const cardDeletBtn = (
    `trash ${isOwn ? 'trash_btn_visible' : 'trash_btn_hidden'}`
  );
  const isLiked = props.likes.some(i => i._id === currentUser._id);
  const cardLikeBtnActive = `card__btn-like ${isLiked ? 'card__btn-like_active' : ''}`;

  function clickImg() {
    props.onClickCard(props);
  }
  function clickLike() {
    props.onCardLike(props);
  }
  function removeCard() {
    props.onCardDelete(props);
  }

  return(
    <figure className="card">
      <button className={`${cardDeletBtn} hover-opacity`} onClick={removeCard} />
      <img className="card__img" src={props.src} alt={props.alt}  onClick={clickImg}/>

      <figcaption className="card__bottom">
        <div className="card__text">
          <p className="card__title">{props.title}</p>
          <div className="card__like-box">
            <button className={`card__btn-like ${cardLikeBtnActive} hover-opacity`} type="button" onClick={clickLike}/>
            <p className="card__like-text">{props.likes.length} </p>
          </div>
        </div>
      </figcaption>
    </figure>
  )
}

export default Card
