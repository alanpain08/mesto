import { Popup } from './Popup.js';
export { PopupWithImage };

class PopupWithImage extends Popup {
  constructor(popupSelector, data) {
    super(popupSelector);
    this._popup = popupSelector;
    this._name = data.name;
    this._link = data.link;
  }

  open() {
    super.open();
    this._popup.querySelector('.popup__img').src = this._link;
    this._popup.querySelector('.popup__img').alt = this._name;
    this._popup.querySelector('.popup__caption').textContent = this._name;
  }
}
