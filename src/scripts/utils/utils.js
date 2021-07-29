import { popupImage } from './constants.js';
import { Card } from '../components/Card.js';
import { PopupWithImage } from '../components/PopupWithImage.js';

const popupWithImage = new PopupWithImage(popupImage);
popupWithImage.setEventListeners();

/*открыть попап изображения
function handleCardClick(item) {
  popupWithImage.open(item.link, item.name);
}*/

//Функция создания карточки
export function createElement(item) {
  const card = new Card(item, '.template-element', {handleCardClick: () => {
    popupWithImage.open(item.link, item.name);
  }});
  return card.generateElement();
}
