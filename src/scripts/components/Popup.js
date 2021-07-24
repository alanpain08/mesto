export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close(this._popup);
    }
  }

  _handleOverlayClose(evt) {
    if (evt.target.classList.contains('popup_opened')) {
      this.close(this._popup);
    }
    if (evt.target.classList.contains('popup__close')) {
      this.close(this._popup);
    }
  }

  setEventListeners() {
    this._popup.querySelector('.popup__close').addEventListener('click', this.close.bind(this));

    this._popup.addEventListener('mousedown', this._handleOverlayClose.bind(this));
  }
}
