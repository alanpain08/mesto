import { initialCards } from './initial-cards.js';
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { Section } from './Section.js';
import { Popup } from './Popup.js';
import { PopupWithImage } from './PopupWithImage.js';
import { PopupWithForm } from './PopupWithForm.js';
//export { openPopup };

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
//Функция открытия попапа Изображения
function openPopupImage(popupSelector, data) {
  const popupImage = new PopupWithImage(popupSelector, data);
  popupImage.open();
  popupImage.setEventListeners();
}

//Функция создания карточки
function createElement(item) {
  const card = new Card(item, '.template-element', () => {
    openPopupImage(popupImage, item);
  });
  return card.generateElement();
}
// Вывод массива карточек
/*initialCards.forEach((item) => {
  contentBlockElements.prepend(createElement(item));
});*/

const cardList = new Section({
  data: initialCards,
  renderer: (item) => {
    cardList.addItem(createElement(item));
  },
},
  contentBlockElements
);

cardList.renderItems();

//Функция открытия попапов
/*function openPopup(popup) {
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
*/
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
const openedEditPopup = new Popup(popupEditProfile);
openPopupEditProfileBtn.addEventListener('click', () => {
  openedEditPopup.open();
  openedEditPopup.setEventListeners();
  nameEditInput.value = nameInfo.textContent;
  aboutEditInput.value = aboutInfo.textContent;
  editPopupValidation.toggleButtonState();
})

//openedEditPopup.open();



//Отправка формы попапа редактирования Профиля
formEditPopup.addEventListener('submit', handleProfileFormSubmit);

//Открыть попап Добавления нового места
openPopupAddCardBtn.addEventListener('click', () => {
  openPopup(popupAddCard);
  formAddPopup.reset();
  //Регулировать состояние кнопки сабмита с помощью публичного метода
  //класса toggleButtonState
  addPopupValidation.toggleButtonState();
});

//Отправка формы попапа Добавления нового места
formAddPopup.addEventListener('submit', handleAddFormSubmit);

//Закрытие попапов
/*popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup);
    }
    if (evt.target.classList.contains('popup__close')) {
      closePopup(popup);
    }
  })
})*/

//Валидация форм
const editPopupValidation = new FormValidator(selectorObject, formEditPopup);
editPopupValidation.enableValidation();

const addPopupValidation = new FormValidator(selectorObject, formAddPopup);
addPopupValidation.enableValidation();



