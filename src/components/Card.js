import React from "react";

import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ onClickCard, onCardLike, onCardDelete, ownerId, _id, likes, src, alt, title}) {

  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = ownerId === currentUser._id;
  const cardDeleteBtn = (
    `trash ${isOwn ? 'trash_btn_visible' : 'trash_btn_hidden'}`
  );
  const isLiked = likes.some(i => i._id === currentUser._id);
  const cardLikeBtnActive = `card__btn-like ${isLiked ? 'card__btn-like_active' : ''}`;

  function clickImg() {
    onClickCard({ src, title, alt });
  }
  function clickLike() {
    onCardLike({ _id, likes });
  }
  function removeCard() {
    onCardDelete({ _id });
  }

  return(
    <figure className="card">
      <button className={`${cardDeleteBtn} hover-opacity`} onClick={removeCard} />
      <img className="card__img" src={src} alt={alt}  onClick={clickImg}/>

      <figcaption className="card__bottom">
        <div className="card__text">
          <p className="card__title">{title}</p>
          <div className="card__like-box">
            <button className={`card__btn-like ${cardLikeBtnActive} hover-opacity`} type="button" onClick={clickLike}/>
            <p className="card__like-text">{likes.length} </p>
          </div>
        </div>
      </figcaption>
    </figure>
  )
}

export default Card
