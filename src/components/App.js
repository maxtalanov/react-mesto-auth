import React from "react";

import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
  //console.log(props, 'Компонент APP');
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);
  const [dataImg, setDataImg] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState('');
  const [cards , setCards] = React.useState([]);

    //Карточки инит
  React.useEffect(()=> {

    //запрос за карточками
    api.getIntalCards(cards)
      .then(cards =>{
        setCards(cards);
      })
      .catch((err) => {
        const linkError = 'https://yandex.ru/support/webmaster/error-dictionary/http-codes.html';

        console.log('Код ошибки:', err); // выведем ошибку в консоль
        console.log(`Проверьте причину в справочнике по адресу: ${linkError}`)
      })
  }, []);

    //Информация о пользователе
  React.useEffect(() => {
    api.getInfoUser(currentUser)
      .then(currentUser => {
        setCurrentUser(currentUser)
      })
      .catch((err) => {
        const linkError = 'https://yandex.ru/support/webmaster/error-dictionary/http-codes.html';

        console.log('Код ошибки:', err); // выведем ошибку в консоль
        console.log(`Проверьте причину в справочнике по адресу: ${linkError}`)
      })
  },[])

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false)
  }

  function handleCardLike(card) {
    // console.log(card, 'handleCardLike')
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch((err) => {
        const linkError = 'https://yandex.ru/support/webmaster/error-dictionary/http-codes.html';

        console.log('Код ошибки:', err); // выведем ошибку в консоль
        console.log(`Проверьте причину в справочнике по адресу: ${linkError}`)
      });
  }

  function handleCardDelete(card) {
    api.removeCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id ? c : ''));
      })
      .catch((err) => {
        const linkError = 'https://yandex.ru/support/webmaster/error-dictionary/http-codes.html';

        console.log('Код ошибки:', err); // выведем ошибку в консоль
        console.log(`Проверьте причину в справочнике по адресу: ${linkError}`)
      });
  }

  function handleCardClick(card){
    setSelectedCard(true);
    setDataImg(card);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
    //document.querySelector('.popup_type_avatar').classList.toggle('popup_opened');
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
    // document.querySelector('.popup_type_profile').classList.toggle('popup_opened');
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
    document.querySelector('.popup_type_card').classList.toggle('popup_opened');
  }

  function handleUpdateUser(editDataUser) {
      //console.log(editDataUser, '')
    api.editYourProfile(editDataUser)
      .then(newDataUser => {
        setCurrentUser(newDataUser);
        closeAllPopups();
      })
      .catch((err) => {
        const linkError = 'https://yandex.ru/support/webmaster/error-dictionary/http-codes.html';
        console.log('Код ошибки:', err); // выведем ошибку в консоль
        console.log(`Проверьте причину в справочнике по адресу: ${linkError}`)
      })
  }

  function handleUpdateAvatar(editAvatar) {
      console.log(editAvatar)
    api.upAvatar(editAvatar)
      .then(newDataUser => {
        setCurrentUser(newDataUser);
        closeAllPopups();
      })
      .catch((err) => {
      const linkError = 'https://yandex.ru/support/webmaster/error-dictionary/http-codes.html';
      console.log('Код ошибки:', err); // выведем ошибку в консоль
      console.log(`Проверьте причину в справочнике по адресу: ${linkError}`)
    })
  }

  function handleAddCard(addNewCardData) {
    console.log(addNewCardData);
    api.addNewCard(addNewCardData)
      .then(newCard => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        const linkError = 'https://yandex.ru/support/webmaster/error-dictionary/http-codes.html';
        console.log('Код ошибки:', err); // выведем ошибку в консоль
        console.log(`Проверьте причину в справочнике по адресу: ${linkError}`)
      })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
          <Main
            profileEditOnClick={handleEditProfileClick}
            addPlacrOnClick={handleAddPlaceClick}
            avatarEditOnClick={handleEditAvatarClick}
            onCardClick={handleCardClick}
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />

        <Footer />

        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
        <EditAvatarPopup  isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddCard}/>

        <PopupWithForm name="delete" title="Вы уверены?" inputBtnSelector="create" inpitValue="Да">
        </PopupWithForm>

        <ImagePopup
          card={selectedCard}
          cardData={dataImg}
          onClose={closeAllPopups}
        />


      </div>
    </CurrentUserContext.Provider>
  );
}


export default App;
