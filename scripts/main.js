const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
//Элементы Profile
const editPopup = document.querySelector('.popup_type_edit');
const openEditPopup = document.querySelector('.info__edit-button');
const closePopup = document.querySelector('.popup__close');
const nameEditInput = document.querySelector('.popup__input_type_name');
const aboutEditInput = document.querySelector('.popup__input_type_about');
const formEditPopup = document.querySelector('.popup__form');
const nameInfo = document.querySelector('.info__name');
const aboutInfo = document.querySelector('.info__about');

//Элементы карточек
const templateElement = document.querySelector('.template-element').content;
const contentBlockElements = document.querySelector('.page__elements');

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
  contentBlockElements.prepend(contentElement);
  return contentElement;
}

function renderElements() {
  initialCards.forEach(renderElement);
}

renderElements();

//Функция отправки формы Профиля
function formSubmitHandler(evt) {
  evt.preventDefault();
  nameInfo.textContent = nameEditInput.value;
  aboutInfo.textContent = aboutEditInput.value;
  removeOpenPopupClass(editPopup);
}

//Функция открытия попапов
function addOpenPopupClass(popup) {
  popup.classList.add('popup_opened');
}
//Функция закрытия попапов
function removeOpenPopupClass(popup) {
  popup.classList.remove('popup_opened');
}



//Открыть попап редактирования Профиля
openEditPopup.addEventListener('click', () => {
  addOpenPopupClass(editPopup);
  nameEditInput.value = nameInfo.textContent;
  aboutEditInput.value = aboutInfo.textContent;
});
//Закрыть попап редактирования Профиля
closePopup.addEventListener('click', () => {
  removeOpenPopupClass(editPopup);
});
//Отправка формы попапа редактирования Профиля
formEditPopup.addEventListener('submit', formSubmitHandler);

//Поставить/убрать like
likeButton.addEventListener('click', (evt) => {
  evt.target.classList.toggle('element__like_active');
});




/* с этим пока не разобрался
popup.addEventListener('click', function(event) {
  if(event.target === event.currentTarget) {
    togglePopupClass();
  }
})
*/

