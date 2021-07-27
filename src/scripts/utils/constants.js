export {
  apiConfig, infoSelectors, initialCards, selectorObject, popupEditProfile, openPopupEditProfileBtn, nameEditInput, aboutEditInput, formEditPopup, nameInfo, aboutInfo,
  popupAddCard, openPopupAddCardBtn, formAddPopup, popupImage, contentBlockElements
}

//Объект с данными для Апи
const apiConfig = {
  adress: `https://mesto.nomoreparties.co/v1/`,
  cohort: `cohort-26`,
  headers: {
    authorization: '98f3d7dc-1729-485b-86b6-af7eebdd3027',
    'Content-Type': 'application/json'
  }
}

const infoSelectors = {
  nameSelector: '.info__name',
  aboutSelector: '.info__about'
}

//Массив карточек
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//Объект с настройками для валидации
const selectorObject = {
  form: '.popup__form',
  input: '.popup__input',
  submitButton: '.popup__submit-button',
  inactiveButton: 'popup__submit-button_inactive',
  inputError: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

//Элементы Profile и попапа Редкатирования
const popupEditProfile = '.popup_type_edit';
const openPopupEditProfileBtn = document.querySelector('.info__edit-button');
const nameEditInput = document.querySelector('.popup__input_type_name');
const aboutEditInput = document.querySelector('.popup__input_type_about');
const formEditPopup = document.querySelector('.popup__form_type_edit');
const nameInfo = document.querySelector('.info__name');
const aboutInfo = document.querySelector('.info__about');

//Элементы попапа Добавления нового места
const popupAddCard = '.popup_type_add';
const openPopupAddCardBtn = document.querySelector('.profile__add-button');
const formAddPopup = document.querySelector('.popup__form_type_add');

//Элементы попапа Изображения
const popupImage = '.popup_type_img';

//Элементы карточек
const contentBlockElements = document.querySelector('.page__elements');
