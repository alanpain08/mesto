import { Popup } from './Popup.js';
export {PopupWithFrom};

class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._popupSelector = popupSelector;
        this._handleFormSubmit = handleFormSubmit;
      }
    
      _getTemplate = () => {
          const formElement = document
          .querySelector(this._popupSelector)
          .content
          .querySelector('.popup__form')
          .cloneNode(true);
    
        return formElement;
      }
    
      _setEventListeners = () => {
          super._setEventListeners();
        this._element.addEventListener('submit', (evt) => {
          evt.preventDefault();
          this._handleFormSubmit(this._getInputValues());
    
          this._element.reset();
        })
      }
    
      _getInputValues = () => {
        this._inputList = this._element.querySelectorAll('.popup__input');
        
        this._formValues = {};
        this._inputList.forEach((input) => {
            this._formValues[input.name] = input.value;
            
        });
        
        return this._formValues;
      }

      close = () => {
        super.close();
        this._element.reset();
      }
    
      generateForm = () => {
        this._element = this._getTemplate();
        this._setEventListeners();
    
          return this._element;
      }
    }