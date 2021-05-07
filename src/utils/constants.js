export const configValidator = {
  inputSelector: '.form__input',
  submitButtonSelector: '.form__btn-input',
  inactiveButtonClass: 'form__btn-input_state_blocked',
  inputErrorClass: 'form__input_state_invalid',
  errorClass: 'error'
};

export const root = document.querySelector('.root');

// Кнопки и модальное окно
export const popups = document.querySelectorAll('.popup');
export const popup = document.querySelector('.popup');
export const btnExitPopup = document.querySelector('popup__btn-exit')

export const popupProfile = document.querySelector('.popup_type_profile');
export const btnOpenPopupProfile = document.querySelector('.profile__edit-button');
// export const btnExitPopupProfile = popupProfile.querySelector('.form__btn-exit');
export const btnSavePopupProfile = popupProfile.querySelector('.form__btn-save');

export const popupCard = document.querySelector('.popup_type_card');
export const btnOpenPopupCard = document.querySelector('.profile__add-button');
// export const btnExitPopupCard = popupCard.querySelector('.form__btn-exit');
export const btnCreatePopupCard = popupCard.querySelector('.form__btn-create');

export const popupImg = document.querySelector('.popup_type_img');
// export const btnExitPopupImg = popupImg.querySelector('.show-img__btn-exit');
export const imgEl = popupImg.querySelector('.show-img__img');
export const textEl = popupImg.querySelector('.show-img__text');

//Фрма для профайла
export const formProfile = document.querySelector('.form-profile');
export const formName = formProfile.querySelector('.form__name');
export const formStatus = formProfile.querySelector('.form__status');

// Форма для card
export const formCard = document.querySelector('.form-card');
export const inputName = formCard.querySelector('.form__in-name');
export const inputLink = formCard.querySelector('.form__in-link');

//Данные для формы
export const nameInput = document.querySelector('.form__name');
export const statusInput = document.querySelector('.form__status');

// Шаблон карточек
export const templateCard = document.querySelector('.template-card');
export const photoCard = document.querySelector('.photo-card');

//Переменные для класса UserInfo
export const nameEditProfile = document.querySelector('.profile__name');
export const statusEditProfile = document.querySelector('.profile__status');

export const avatarProfile = document.querySelector('.profile__avatar');
export const btnOpenPopupAvatar = document.querySelector('.profile__img-box');
