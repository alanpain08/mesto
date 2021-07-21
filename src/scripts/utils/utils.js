import { popupImage } from './constants.js';
import { Card } from '../components/Card.js';
import { PopupWithImage } from '../components/PopupWithImage.js'

//Функция открытия попапа Изображения
function openPopupImage(popupSelector, data) {
  const openedPopupImage = new PopupWithImage(popupSelector, data);
  openedPopupImage.open();
  openedPopupImage.setEventListeners();
}

//Функция создания карточки
export function createElement(item) {
  const card = new Card(item, '.template-element', () => {
    openPopupImage(popupImage, item);
  });
  return card.generateElement();
}
