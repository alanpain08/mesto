import './index.css';
import {
  apiConfig, infoSelectors, initialCards, selectorObject,
  popupEditProfile, openPopupEditProfileBtn, nameEditInput, aboutEditInput, formEditPopup, nameInfo, aboutInfo,
  popupAddCard, openPopupAddCardBtn, formAddPopup,
  contentBlockElements
} from '../scripts/utils/constants.js';
import { createElement } from '../scripts/utils/utils.js';
import { FormValidator } from '../scripts/components/FormValidator.js';
import { Section } from '../scripts/components/Section.js';
import { PopupWithForm } from '../scripts/components/PopupWithForm.js';
import { UserInfo } from '../scripts/components/UserInfo.js';
import { Api } from '../scripts/components/Api.js';

let userId = null;

const api = new Api(apiConfig);

const popupInfo = new UserInfo(infoSelectors);

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([user, cards]) => {
    console.log(user);
    userId = user._id;
    popupInfo.setUserInfo(user);
    popupInfo.updateUserInfo();
    console.log(cards);
    cardList.renderItems(cards.reverse());
  })
  .catch((err) => {
    console.log(err);
  })

const cardList = new Section(
  (item) => {
    cardList.addItem(createElement(item));
  },
  contentBlockElements
);


//Открыть попап редактирования Профиля
const openedEditPopup = new PopupWithForm(popupEditProfile, (item) => {
  api.editUserInfo({ name: item.name, about: item.about })
    .then((res) => {
      popupInfo.setUserInfo(res);
      popupInfo.updateUserInfo();
    })
    .catch((err) => {
      console.log(err);
    })
});
openedEditPopup.setEventListeners();

openPopupEditProfileBtn.addEventListener('click', () => {
  openedEditPopup.open();
  const { name, about } = popupInfo.getUserInfo();
  nameEditInput.value = name;
  aboutEditInput.value = about;
  editPopupValidation.toggleButtonState();
})


//Открыть попап Добавления нового места
const openedAddPopup = new PopupWithForm(popupAddCard, (item) => {
  api.addCard({ name: item.place, link: item.link })
    .then((res) => {
      cardList.addItem(createElement(res));
    })
    .catch((err) => {
      console.log(err);
    })
});
openedAddPopup.setEventListeners();

openPopupAddCardBtn.addEventListener('click', () => {
  openedAddPopup.open();
  //Регулировать состояние кнопки сабмита с помощью публичного метода класса toggleButtonState
  addPopupValidation.toggleButtonState();
});

//Отрисовка карточек
//cardList.renderItems();




//Валидация форм
const editPopupValidation = new FormValidator(selectorObject, formEditPopup);
editPopupValidation.enableValidation();

const addPopupValidation = new FormValidator(selectorObject, formAddPopup);
addPopupValidation.enableValidation();



