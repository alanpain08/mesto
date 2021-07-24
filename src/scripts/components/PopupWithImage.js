import { Popup } from './Popup.js';
export { PopupWithImage };

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popup = document.querySelector(popupSelector);
    this._popupCardImage = this._popup.querySelector('.popup__img');
    this._captionImage = this._popup.querySelector('.popup__caption');
  }

  open(link, name) {
    this._popupCardImage.src = link;
    this._popupCardImage.alt = `увеличенное изображение ${name}`;
    this._captionImage.textContent = name;
    super.open();
  }
}
