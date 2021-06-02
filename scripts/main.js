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
//Элементы Profile и попапа Редкатирования
const editPopup = document.querySelector('.popup_type_edit');
const openEditPopup = document.querySelector('.info__edit-button');
const closeEditPopup = document.querySelector('.popup__close-edit');
const nameEditInput = document.querySelector('.popup__input_type_name');
const aboutEditInput = document.querySelector('.popup__input_type_about');
const formEditPopup = document.querySelector('.popup__form_type_edit');
const nameInfo = document.querySelector('.info__name');
const aboutInfo = document.querySelector('.info__about');

//Элементы карточек
const templateElement = document.querySelector('.template-element').content;
const contentBlockElements = document.querySelector('.page__elements');

//Элементы попапа Добавления нового места
const addPopup = document.querySelector('.popup_type_add');
const openAddPopup = document.querySelector('.profile__add-button');
const closeAddPopup = document.querySelector('.popup__close-add');
const nameAddInput = document.querySelector('.popup__input_type_title');
const linkAddInput = document.querySelector('.popup__input_type_link');
const formAddPopup = document.querySelector('.popup__form_type_add');

//Элементы попапа Изображения
const imgPopup = document.querySelector('.popup_type_img');
const closeImgPopup = document.querySelector('.popup__close-img');
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
    imgPopup.classList.add('popup_opened');
    picturePopup.src = elementPhoto.src;
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
function addOpenPopupClass(popup) {
  popup.classList.add('popup_opened');
}
//Функция закрытия попапов
function removeOpenPopupClass(popup) {
  popup.classList.remove('popup_opened');
}

//Функция отправки формы Профиля
function formSubmitHandler(evt) {
  evt.preventDefault();
  nameInfo.textContent = nameEditInput.value;
  aboutInfo.textContent = aboutEditInput.value;
  removeOpenPopupClass(editPopup);
}

//Функция отправки формы Нового места
function addFormSubmitHandler(evt) {
  evt.preventDefault();
  const newCard = renderElement(nameAddInput.value, linkAddInput.value);
  contentBlockElements.prepend(newCard);
  removeOpenPopupClass(addPopup);
}

//Функция поставить/убрать like
function like(evt) {
  evt.target.classList.toggle('element__like-button_active');
};

//Закрыть попап Изображения
closeImgPopup.addEventListener('click', () => {
  removeOpenPopupClass(imgPopup);
});

//Открыть попап редактирования Профиля
openEditPopup.addEventListener('click', () => {
  addOpenPopupClass(editPopup);
  nameEditInput.value = nameInfo.textContent;
  aboutEditInput.value = aboutInfo.textContent;
});
//Закрыть попап редактирования Профиля
closeEditPopup.addEventListener('click', () => {
  removeOpenPopupClass(editPopup);
});
//Отправка формы попапа редактирования Профиля
formEditPopup.addEventListener('submit', formSubmitHandler);

//Открыть попап Добавления нового места
openAddPopup.addEventListener('click', () => {
  addOpenPopupClass(addPopup);
});
//Закрыть попап Добавления нового места
closeAddPopup.addEventListener('click', () => {
  removeOpenPopupClass(addPopup);
});
//Отправка формы попапа Добавления нового места
formAddPopup.addEventListener('submit', addFormSubmitHandler);





/* с этим пока не разобрался
popup.addEventListener('click', function(event) {
  if(event.target === event.currentTarget) {
    togglePopupClass();
  }
})
*/

