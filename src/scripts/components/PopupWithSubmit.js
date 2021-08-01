import { Popup } from './Popup.js';
export { PopupWithSubmit };

class PopupWithSubmit extends Popup {
    constructor(popupSelector, handleDeleteElement) {
        super(popupSelector);
        this._popup = document.querySelector(popupSelector);
        this._handleDeleteElement = handleDeleteElement;
        this._submitButton = this._popup.querySelector('.popup__submit-button');
    }

    open(card) {
        super.open();
        this._card = card;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popup.querySelector('.popup__submit-button').addEventListener('click', (evt) => {
            evt.preventDefault();
            this._handleDeleteElement(this._card);
        })
    }

    loadingButton(isLoading) {
        if (isLoading) {
            this._submitButton.textContent = 'Удаление...';
        } else {
            this._submitButton.textContent = 'Да';
        }
    }
}