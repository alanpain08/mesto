export { Card };

class Card {
  constructor(data, userId, templateSelector, { handleCardClick, addLike, deleteLike, handleDeleteClick}) {
    this._name = data.name;
    this._link = data.link;
    this._template = templateSelector;
    this._handleCardClick = handleCardClick;
    this._likes = data.likes;
    this._cardId = data._id;
    this._ownerId = data.owner._id;
    this._userId = userId;
    this._addLike = addLike;
    this._deleteLike = deleteLike;
    this._handleDeleteClick = handleDeleteClick
  }

  getCardId() {
    return this._cardId;
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
    const deleteButton = this._element.querySelector('.element__delete-button');
    this._element.querySelector('.element__text').textContent = this._name;
    elementImg.src = this._link;
    elementImg.alt = this._name;
    //убрать иконку корзинки, если карточку создал не юзер
    if(this._ownerId !== this._userId) {deleteButton.remove()}
    //показать количество лайков
    this.showLikeQuantity(this._likes);
    // Вернуть элемент наружу
    return this._element;
  }

  // Добавить слушатели событий
  _setEventListeners = () => {
    this._element.querySelector('.element__like-button').addEventListener('click', () => {
      this._handleLikeClick();
    });

    this._element.querySelector('.element__delete-button').addEventListener('click', () => {
      this._handleDeleteClick(this);
    });

    this._element.querySelector('.element__img').addEventListener('click', () => {
      this._openPopupImage();
    })
  }

  //Определить есть ли лайк юзера
  _cardIsLiked(likes) {
    return likes.some((like) => {
      return like._id === this._userId;
    })
  }

  //закрасить лайк
  paintOverLike(likes) {
    if (this._cardIsLiked(likes)) {
      this._element.querySelector('.element__like-button').classList.add('element__like-button_active');
  } else {
    this._element.querySelector('.element__like-button').classList.remove('element__like-button_active');
  }
  }

  //показать количество лайков
  showLikeQuantity(likes) {
    this._likes = likes;
    this._element.querySelector('.element__like-number').textContent = likes.length;
    if(likes.length === 0) { this._element.querySelector('.element__like-number').textContent = '' }
    this.paintOverLike(likes);
  }


  // Добавить метод лайка
  _handleLikeClick = () => {
    if (this._cardIsLiked(this._likes)) {
      this._deleteLike(this._cardId)
  } else {
      this._addLike(this._cardId)
  }
  }

  // Добавить метод удаления карточки
  deleteElement = () => {
    this._element.remove();
    this._element = null; // затереть ссылку на DOM-элемент
  }

  // Метод открытия попапа Изображения
  _openPopupImage = () => {
    this._handleCardClick();

  }
}
