import {
  initialCards, selectorObject,
  popupEditProfile, openPopupEditProfileBtn, nameEditInput, aboutEditInput, formEditPopup, nameInfo, aboutInfo,
  popupAddCard, openPopupAddCardBtn, formAddPopup,
  contentBlockElements
} from '../scripts/utils/constants.js';
import { createElement } from '../scripts/utils/utils.js';
import { FormValidator } from '../scripts/components/FormValidator.js';
import { Section } from '../scripts/components/Section.js';
import { PopupWithForm } from '../scripts/components/PopupWithForm.js';
import { UserInfo } from '../scripts/components/UserInfo.js';



const cardList = new Section({
  data: initialCards,
  renderer: (item) => {
    cardList.addItem(createElement(item));
  },
},
  contentBlockElements
);

//Открыть попап Добавления нового места
const openedAddPopup = new PopupWithForm(popupAddCard, (item) => {
  cardList.addItem(createElement(item));
});
openedAddPopup.setEventListeners();

openPopupAddCardBtn.addEventListener('click', () => {
  openedAddPopup.open();
  //Регулировать состояние кнопки сабмита с помощью публичного метода класса toggleButtonState
  addPopupValidation.toggleButtonState();
});

//Отрисовка карточек
cardList.renderItems();


//Открыть попап редактирования Профиля
const popupInfo = new UserInfo(nameInfo, aboutInfo);

const openedEditPopup = new PopupWithForm(popupEditProfile, (item) => {
  popupInfo.setUserInfo(item);
});
openedEditPopup.setEventListeners();

openPopupEditProfileBtn.addEventListener('click', () => {
  openedEditPopup.open();
  const { name, about } = popupInfo.getUserInfo();
  nameEditInput.value = name;
  aboutEditInput.value = about;
  editPopupValidation.toggleButtonState();
})

//Валидация форм
const editPopupValidation = new FormValidator(selectorObject, formEditPopup);
editPopupValidation.enableValidation();

const addPopupValidation = new FormValidator(selectorObject, formAddPopup);
addPopupValidation.enableValidation();



