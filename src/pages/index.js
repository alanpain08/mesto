import './index.css';
import {
  apiConfig, infoSelectors, initialCards, selectorObject,
  popupEditProfile, openPopupEditProfileBtn, nameEditInput, aboutEditInput, formEditPopup, nameInfo, aboutInfo,
  popupAddCard, openPopupAddCardBtn, formAddPopup,
  popupImage, 
  contentBlockElements,
  popupSubmit,
  popupAvatar, openPopupAvatarBtn, formAvatarPopup
} from '../scripts/utils/constants.js';
import { FormValidator } from '../scripts/components/FormValidator.js';
import { Section } from '../scripts/components/Section.js';
import { PopupWithForm } from '../scripts/components/PopupWithForm.js';
import { UserInfo } from '../scripts/components/UserInfo.js';
import { Api } from '../scripts/components/Api.js';
import { Card } from '../scripts/components/Card.js';
import { PopupWithImage } from '../scripts/components/PopupWithImage.js';
import { PopupWithSubmit } from '../scripts/components/PopupWithSubmit.js';

let userId = null;

const api = new Api(apiConfig);

const popupInfo = new UserInfo(infoSelectors);

const popupWithImage = new PopupWithImage(popupImage);
popupWithImage.setEventListeners();

const popupWithSubmit = new PopupWithSubmit(popupSubmit, (item) => {
  popupWithSubmit.loadingButton(true);
  api.deleteCard(item.getCardId())
    .then((res) => {
        item.deleteElement(res);
        popupWithSubmit.close();
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
      popupWithSubmit.loadingButton(false);
  })
})
popupWithSubmit.setEventListeners();

//Функция создания карточки
export function createElement(item) {
  const card = new Card(item, userId, '.template-element', 
  {handleCardClick: () => {
    popupWithImage.open(item.link, item.name);
  },
  addLike: (item) => {
    api.putLike(item)
    .then((res) => {
      card.showLikeQuantity(res.likes)
    })
    .catch((err) => {
      console.log(err);
    })
  },
  deleteLike: (item) => {
    api.deleteLike(item)
    .then((res) => {
      card.showLikeQuantity(res.likes)
    })
    .catch((err) => {
      console.log(err);
    })
  },
  handleDeleteClick: (item) => {
    popupWithSubmit.open(item);
  }
});
  return card.generateElement();
}


Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([user, cards]) => {
    console.log(user);
    userId = user._id;
    popupInfo.setUserInfo(user);
    popupInfo.updateUserInfo();
    popupInfo.updateAvatar(user);
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
  openedEditPopup.loadingButton(true);
  api.editUserInfo({ name: item.name, about: item.about })
    .then((res) => {
      popupInfo.setUserInfo(res);
      popupInfo.updateUserInfo();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      openedEditPopup.loadingButton(false);
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
  openedAddPopup.loadingButton(true);
  api.addCard({ name: item.place, link: item.link })
    .then((res) => {
      cardList.addItem(createElement(res));
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      openedAddPopup.loadingButton(false);
  })
});
openedAddPopup.setEventListeners();

openPopupAddCardBtn.addEventListener('click', () => {
  openedAddPopup.open();
  //Регулировать состояние кнопки сабмита с помощью публичного метода класса toggleButtonState
  addPopupValidation.toggleButtonState();
});

//открыть попап редактирования аватара
const openedAvatar = new PopupWithForm(popupAvatar, (item) => {
  openedAvatar.loadingButton(true);
  api.editAvatar({avatar: item.avatar})
  .then((res) => {
    popupInfo.updateAvatar(res);
    openedAvatar.close();
})
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    openedAvatar.loadingButton(false);
})
});
openedAvatar.setEventListeners();

openPopupAvatarBtn.addEventListener('click', () => {
  openedAvatar.open();
  //Регулировать состояние кнопки сабмита с помощью публичного метода класса toggleButtonState
  avatarPopupValidation.toggleButtonState();
});

//Отрисовка карточек
//cardList.renderItems();




//Валидация форм
const editPopupValidation = new FormValidator(selectorObject, formEditPopup);
editPopupValidation.enableValidation();

const addPopupValidation = new FormValidator(selectorObject, formAddPopup);
addPopupValidation.enableValidation();

const avatarPopupValidation = new FormValidator(selectorObject, formAvatarPopup);
avatarPopupValidation.enableValidation();



