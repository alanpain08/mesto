import { popupImage } from './constants.js';
import { Card } from '../components/Card.js';
import { PopupWithImage } from '../components/PopupWithImage.js';

const popupWithImage = new PopupWithImage(popupImage);
popupWithImage.setEventListeners();

//Функция создания карточки
export function createElement(item) {
  const card = new Card(item, '.template-element', () => {
    popupWithImage.open(item.link, item.name);
  });
  return card.generateElement();
}
