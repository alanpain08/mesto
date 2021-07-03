import { initialCards } from './initial-cards.js';
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
export { openPopup };

//Объект с настройками для валидации
const selectorObject = {
  form: '.popup__form',
  input: '.popup__input',
  submitButton: '.popup__submit-button',
  inactiveButton: 'popup__submit-button_inactive',
  inputError: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}; 

//Попапы
const popups = document.querySelectorAll('.popup');

//Элементы Profile и попапа Редкатирования
const popupEditProfile = document.querySelector('.popup_type_edit');
const openPopupEditProfileBtn = document.querySelector('.info__edit-button');
const nameEditInput = document.querySelector('.popup__input_type_name');
const aboutEditInput = document.querySelector('.popup__input_type_about');
const formEditPopup = document.querySelector('.popup__form_type_edit');
const nameInfo = document.querySelector('.info__name');
const aboutInfo = document.querySelector('.info__about');

//Элементы попапа Добавления нового места
const popupAddCard = document.querySelector('.popup_type_add');
const openPopupAddCardBtn = document.querySelector('.profile__add-button');
const nameAddInput = document.querySelector('.popup__input_type_title');
const linkAddInput = document.querySelector('.popup__input_type_link');
const formAddPopup = document.querySelector('.popup__form_type_add');

//Элементы попапа Изображения
const popupImage = document.querySelector('.popup_type_img');
const picturePopup = document.querySelector('.popup__img');
const captionPopup = document.querySelector('.popup__caption');

//Элементы карточек
const contentBlockElements = document.querySelector('.page__elements');

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Вывод массива карточек
initialCards.forEach((item) => {
  const card = new Card(item, '.template-element', popupImage, picturePopup, captionPopup);
  const cardElement = card.generateElement();

  // Добавить в DOM
  contentBlockElements.prepend(cardElement);
});

//Функция открытия попапов
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsc);
}
//Функция закрытия попапов
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEsc);
}

//Функция закрытия попапа по нажатию на ESC
function closePopupByEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

//Функция отправки формы Профиля
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  nameInfo.textContent = nameEditInput.value;
  aboutInfo.textContent = aboutEditInput.value;
  closePopup(popupEditProfile);
}

//Функция отправки формы Нового места
function handleAddFormSubmit(evt) {
  evt.preventDefault();
  const newCard = new Card({ name: nameAddInput.value, link: linkAddInput.value }, '.template-element', popupImage, picturePopup, captionPopup);
  const cardElement = newCard.generateElement();
  contentBlockElements.prepend(cardElement);
  closePopup(popupAddCard);
}

//Открыть попап редактирования Профиля
openPopupEditProfileBtn.addEventListener('click', () => {
  openPopup(popupEditProfile);
  nameEditInput.value = nameInfo.textContent;
  aboutEditInput.value = aboutInfo.textContent;
});

//Отправка формы попапа редактирования Профиля
formEditPopup.addEventListener('submit', handleProfileFormSubmit);

//Открыть попап Добавления нового места
openPopupAddCardBtn.addEventListener('click', () => {
  openPopup(popupAddCard);
  formAddPopup.reset();
  const buttonElement = formAddPopup.querySelector('.popup__submit-button');
  //Cделать кнопку сабмита при открытии попапа Добавления нового места неактивной
  buttonElement.setAttribute('disabled', 'true');
  buttonElement.classList.add(selectorObject.inactiveButton);
});

//Отправка формы попапа Добавления нового места
formAddPopup.addEventListener('submit', handleAddFormSubmit);

//Закрытие попапов
popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup);
    }
    if (evt.target.classList.contains('popup__close')) {
      closePopup(popup);
    }
  })
})

//Валидация форм
const editPopupValidation = new FormValidator(selectorObject, formEditPopup);
editPopupValidation.enableValidation();

const addPopupValidation = new FormValidator(selectorObject, formAddPopup);
addPopupValidation.enableValidation();



