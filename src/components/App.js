import React from "react";
import { Redirect, Switch, Route, useHistory } from "react-router-dom";

import Main from '../components/Main';
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Login from "./Login";
import Register from "./Register";
import InfoTooltip from "./InfoTooltip";
import ProtectedRoute from "./ProtectedRoute";
import * as ApiAuth from "../utils/ApiAuth";

import successIcon from "../images/successful.svg";
import errorIcon from "../images/failed.svg";


function App() {
  //console.log(props, 'Компонент APP');
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);
  const [dataImg, setDataImg] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});
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
  },[currentUser])

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false)
    setRegisterError(false);
    setRegisterOk(false)
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
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
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

  function closePopupRegisterOk() {
    closeAllPopups()
    history.push('sign-in');
  }

  // #АВТОРИЗИЦИЯ #АВТОРИЗИЦИЯ #АВТОРИЗИЦИЯ #АВТОРИЗИЦИЯ #АВТОРИЗИЦИЯ #АВТОРИЗИЦИЯ
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [emailShow, setEmailShow] = React.useState('')
  const [registerOk, setRegisterOk] = React.useState(false);
  const [registerError, setRegisterError] = React.useState(false)
  const history =  useHistory();

  React.useEffect(() => {
    tokenCheck();
  }, []);

  React.useEffect(() => {
    if (loggedIn) {
      history.push('/profile');
    }
  }, [history, loggedIn]);

  const onLogin = (data) => {
    // console.log(`Попытка авторизации, log: ${data}`)

    return ApiAuth
      .authorize(data)
      .then(({ token }) => {
        // console.log(`Авторизации пройдена, log: ${token}`);

        localStorage.setItem('jwt', token);
        setLoggedIn(true);
        setEmailShow(data.email);
        history.push('/profile')
      })
      .catch((err) => {
        const linkError = 'https://yandex.ru/support/webmaster/error-dictionary/http-codes.html';
        console.log('Код ошибки:', err);
        console.log(`Справочник ошибок ${linkError}`)
        setEmailShow('');
      });
  }

  const onRegister = (data) => {
    //console.log(`Попытка регистрации, log: ${data}`)

    return ApiAuth
      .register(data)
      .then((res) => {
        //console.log(`Регистрация пройдена, log: ${res}`);
        setRegisterOk(true);
      })
      .catch((err) => {
        setRegisterError(true);

        const linkError = 'https://yandex.ru/support/webmaster/error-dictionary/http-codes.html';

        console.log('Код ошибки:', err);
        console.log(`Справочник ошибок ${linkError}`)
      });
  }

  const onLogout = () => {
    setLoggedIn(false);
    setEmailShow('');
    localStorage.removeItem('jwt');
  }

  const tokenCheck = () => {

    const jwt = localStorage.getItem('jwt');
    if (!jwt) {
      return;
    }

    ApiAuth
      .getContent(jwt)
      .then((data) => {
        setEmailShow(data.data.email);
        setLoggedIn(true);
      });
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <ProtectedRoute
            profileEditOnClick={handleEditProfileClick}
            addPlacrOnClick={handleAddPlaceClick}
            avatarEditOnClick={handleEditAvatarClick}
            onCardClick={handleCardClick}
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            component={Main}
            path={"/profile"}
            isLoggedIn={loggedIn}
            onLogout={onLogout}
            emailShow={emailShow}
          />

          <Route path="/sign-in">
            <Login onLogin={onLogin} />
          </Route>
          <Route path="/sign-up">
            <Register onRegister={onRegister} />
            <InfoTooltip
              src={successIcon}
              title={'Вы успешно зарегистрировались!'}
              isOpen={registerOk}
              onClose={closePopupRegisterOk}
            />
            <InfoTooltip
              src={errorIcon}
              title={'Что-то пошло не так! Попробуйте ещё раз.'}
              isOpen={registerError}
              onClose={closeAllPopups}
            />
          </Route>

          <Route exact path="/">
            {loggedIn ? <Redirect to="/profile"/> : <Redirect to="/sign-in"/>}
          </Route>
        </Switch>

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
