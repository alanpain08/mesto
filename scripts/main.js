//Попапы
const popups = document.querySelectorAll('.popup');


//Элементы Profile и попапа Редкатирования
const popupEditProfile = document.querySelector('.popup_type_edit');
const openPopupEditProfileBtn = document.querySelector('.info__edit-button');
const closePopupEditProfileBtn = document.querySelector('.popup__close-edit');
const nameEditInput = document.querySelector('.popup__input_type_name');
const aboutEditInput = document.querySelector('.popup__input_type_about');
const formEditPopup = document.querySelector('.popup__form_type_edit');
const nameInfo = document.querySelector('.info__name');
const aboutInfo = document.querySelector('.info__about');

//Элементы карточек
const templateElement = document.querySelector('.template-element').content;
const contentBlockElements = document.querySelector('.page__elements');

//Элементы попапа Добавления нового места
const popupAddCard = document.querySelector('.popup_type_add');
const openPopupAddCardBtn = document.querySelector('.profile__add-button');
const closePopupAddCardBtn = document.querySelector('.popup__close-add');
const nameAddInput = document.querySelector('.popup__input_type_title');
const linkAddInput = document.querySelector('.popup__input_type_link');
const formAddPopup = document.querySelector('.popup__form_type_add');

//Элементы попапа Изображения
const popupImage = document.querySelector('.popup_type_img');
const closePopupImageBtn = document.querySelector('.popup__close-img');
const picturePopup = document.querySelector('.popup__img');
const captionPopup = document.querySelector('.popup__caption');

//Функция создания карточки
function renderElement(name, link) {
  const contentElement = templateElement.cloneNode(true);
  const elementText = contentElement.querySelector('.element__text');
  const elementPhoto = contentElement.querySelector('.element__img');
  const deleteElementButton = contentElement.querySelector('.element__delete-button');
  const likeButton = contentElement.querySelector('.element__like-button');

  elementText.textContent = name;
  elementPhoto.alt = name;
  elementPhoto.src = link;

  likeButton.addEventListener('click', like);
  deleteElementButton.addEventListener('click', deleteElement);
  elementPhoto.addEventListener('click', () => {
    openPopup(popupImage);
    picturePopup.src = elementPhoto.src;
    picturePopup.alt = elementPhoto.alt;
    captionPopup.textContent = elementText.textContent;
  });
  

  return contentElement;
}

//Удаление карточки
function deleteElement(evt) {
  evt.target.closest('.element').remove();
}

//Вывод массив карточек
initialCards.forEach((elem) => {
  const card = renderElement(elem.name, elem.link);
  contentBlockElements.prepend(card);
});

//Функция открытия попапов
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsc);
}
//Функция закрытия попапов
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

//Функция закрытия попапа по нажатию на ESC
function closePopupByEsc(evt) {
  if(evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

//Функция отправки формы Профиля
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  nameInfo.textContent = nameEditInput.value;
  aboutInfo.textContent = aboutEditInput.value;
  closePopup(popupEditProfile);
}

//Функция отправки формы Нового места
function handleAddFormSubmit(evt) {
  evt.preventDefault();
  const newCard = renderElement(nameAddInput.value, linkAddInput.value);
  contentBlockElements.prepend(newCard);
  closePopup(popupAddCard);
}

//Функция поставить/убрать like
function like(evt) {
  evt.target.classList.toggle('element__like-button_active');
};

//Открыть попап редактирования Профиля
openPopupEditProfileBtn.addEventListener('click', () => {
  openPopup(popupEditProfile);
  nameEditInput.value = nameInfo.textContent;
  aboutEditInput.value = aboutInfo.textContent;
});

//Отправка формы попапа редактирования Профиля
formEditPopup.addEventListener('submit', handleProfileFormSubmit);

//Открыть попап Добавления нового места
openPopupAddCardBtn.addEventListener('click', () => {
  openPopup(popupAddCard);
  formAddPopup.reset();
  const buttonElement = formAddPopup.querySelector('.popup__submit-button');
  //Cделать кнопку сабмита при открытии попапа Добавления нового места неактивной
  buttonElement.setAttribute('disabled', 'true');
  buttonElement.classList.add(selectorObject.inactiveButton);
});

//Отправка формы попапа Добавления нового места
formAddPopup.addEventListener('submit', handleAddFormSubmit);

//Закрытие попапов
popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if(evt.target.classList.contains('popup_opened')) {
      closePopup(popup);
      document.removeEventListener('keydown', closePopupByEsc);
    }
    if(evt.target.classList.contains('popup__close')) {
      closePopup(popup);
      document.removeEventListener('keydown', closePopupByEsc);
    }
  })
})





