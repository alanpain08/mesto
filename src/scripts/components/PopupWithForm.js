import { Popup } from './Popup.js';
export { PopupWithForm };

class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._popupSelector = popupSelector;
    this._handleFormSubmit = handleFormSubmit;
  }

  setEventListeners() {
    this._popupForm = this._popupSelector.querySelector('.popup__form');
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this._popupForm.reset();
      this.close(this._popupSelector);
    })
  }

  _getInputValues() {
    this._inputList = this._popupSelector.querySelectorAll('.popup__input');

    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  close() {
    this._popupForm = this._popupSelector.querySelector('.popup__form');
    super.close();
    this._popupForm.reset();
  }
}