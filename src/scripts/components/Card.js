export { Card };

class Card {
  constructor(data, templateSelector, { handleCardClick }) {
    this._name = data.name;
    this._link = data.link;
    this._template = templateSelector;
    this._handleCardClick = handleCardClick;
    this._likes = data.likes;

  }

  _getTemplate = () => {
    // Забрать размеку из HTML и клонировать элемент
    const cardElement = document
      .querySelector(this._template)
      .content
      .querySelector('.element')
      .cloneNode(true);

    // Вернуть DOM-элемент карточки
    return cardElement;
  }

  generateElement = () => {
    // Записать разметку в приватное поле _element.
    // Так у других элементов появится доступ к ней.
    this._element = this._getTemplate();
    this._setEventListeners();

    // Добавить данные
    const elementImg = this._element.querySelector('.element__img');
    const likesQuantity = this._element.querySelector('.element__like-number');
    this._element.querySelector('.element__text').textContent = this._name;
    elementImg.src = this._link;
    elementImg.alt = this._name;
    likesQuantity.textContent = this._likes.length;
    // Вернуть элемент наружу
    return this._element;
  }

  // Добавить слушатели событий
  _setEventListeners = () => {
    this._element.querySelector('.element__like-button').addEventListener('click', () => {
      this._handleLikeClick();
    });

    this._element.querySelector('.element__delete-button').addEventListener('click', () => {
      this._deleteElement();
    });

    this._element.querySelector('.element__img').addEventListener('click', () => {
      this._openPopupImage();
    })
  }

  //Определить есть ли лайк юзера
  cardIsLiked(likes) {

  }


  // Добавить метод лайка
  _handleLikeClick = () => {
    this._element.querySelector('.element__like-button').classList.toggle('element__like-button_active');
  }

  // Добавить метод удаления карточки
  _deleteElement = () => {
    this._element.remove();
    this._element = null; // затереть ссылку на DOM-элемент
  }

  // Метод открытия попапа Изображения
  _openPopupImage = () => {
    this._handleCardClick();

  }
}
