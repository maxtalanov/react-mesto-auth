import React from 'react';
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Header from "./Header";
import Footer from "./Footer";


function Main(props) {
  // console.log(props.cards, 'Компонен: MAIN');

  const currentUser = React.useContext(CurrentUserContext);

  return (
    <>
      <Header linkTitle="" path='/sign-in'>
        <li className="navbar__string">
          <p className="header__link-title">{props.emailShow}</p>
        </li>
        <li className="navbar__string">
          <button className="header__link-title hover-opacity" onClick={props.onLogout}>Выход</button>
        </li>
      </Header>
      <main className="content">
        <section className="profile">
          <a className="profile__img-box" onClick={props.avatarEditOnClick}>
            <img className="profile__avatar profile__btn-avtar-edit hover-opacity" src={currentUser.avatar} alt="Аватар" />
          </a>

          <div className="profile__info">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button className="profile__edit-button hover-opacity" type="button" onClick={props.profileEditOnClick} />
            <p className="profile__status">{currentUser.about}</p>
          </div>
          <button className="profile__add-button hover-opacity" type="button" onClick={props.addPlacrOnClick} />
        </section>

        <section className="photo-card">
          {
            props.cards.map(item => <Card
              key={item._id}
              title={item.name}
              src={item.link}
              alt={item.name}
              likes={item.likes}
              _id={item._id}
              ownerId={item.owner._id}
              onClickCard={props.onCardClick}
              onCardLike={props.onCardLike}
              onCardDelete={props.onCardDelete}
            />)
          }
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Main;
