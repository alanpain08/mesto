//Кнопку в итоге блокирую при открытии попапа Добавления нового места
//Очистку ошибок при повторном открытии попапо я пока не понял как реализовать
//ибо так и не понял, как правильно переносить функции из одного файла в другой)


const selectorObject = {
  form: '.popup__form',
  input: '.popup__input',
  submitButton: '.popup__submit-button',
  inactiveButton: 'popup__submit-button_inactive',
  inputError: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}; 

const showInputError = (formElement, inputElement, errorMessage, config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(config.inputError);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorClass);
};

const hideInputError = (formElement, inputElement, config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(config.inputError);
  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, config) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, config);
  } else {
    hideInputError(formElement, inputElement, config);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

const toggleButtonState = (inputList, buttonElement, config) => {
  if(hasInvalidInput(inputList)) {
    buttonElement.setAttribute('disabled', 'true');
    buttonElement.classList.add(config.inactiveButton);
  } else {
    buttonElement.removeAttribute('disabled');
    buttonElement.classList.remove(config.inactiveButton);
  }
};

const setEventListeners = (formElement, config) => {
  const inputList = Array.from(formElement.querySelectorAll(config.input));
  const buttonElement = formElement.querySelector(config.submitButton);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, config);
      toggleButtonState(inputList, buttonElement, config);
    });
  });
};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.form));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault()
    });
    setEventListeners(formElement, config);
  });
}

enableValidation(selectorObject);