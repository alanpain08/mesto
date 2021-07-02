export { FormValidator };

const selectorObject = {
  form: '.popup__form',
  input: '.popup__input',
  submitButton: '.popup__submit-button',
  inactiveButton: 'popup__submit-button_inactive',
  inputError: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

class FormValidator {
  constructor(config, form) {
    this._input = config.input;
    this._submitButton = config.submitButton;
    this._inactiveButton = config.inactiveButton;
    this._inputError = config.inputError;
    this._errorClass = config.errorClass;
    this._form = form;
  }

  _showInputError = () => {

  }
}
