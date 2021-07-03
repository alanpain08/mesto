export { FormValidator };

class FormValidator {
  constructor(config, form) {
    this._input = config.input;
    this._submitButton = config.submitButton;
    this._inactiveButton = config.inactiveButton;
    this._inputError = config.inputError;
    this._errorClass = config.errorClass;
    this._form = form;
  }

  _showInputError = (inputElement, errorMessage) => {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputError);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError = (inputElement) => {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputError);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  }

  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState = (inputList, buttonElement) => {
    if(this._hasInvalidInput(inputList)) {
      buttonElement.setAttribute('disabled', 'true');
      buttonElement.classList.add(this._inactiveButton);
    } else {
      buttonElement.removeAttribute('disabled');
      buttonElement.classList.remove(this._inactiveButton);
    }
  }

  _setEventListeners = () => {
    const inputList = Array.from(this._form.querySelectorAll(this._input));
    const buttonElement = this._form.querySelector(this._submitButton);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  }

  enableValidation = () => {
      this._form.addEventListener('submit', (evt) => {
        evt.preventDefault()
      });
      this._setEventListeners();
  }
}

