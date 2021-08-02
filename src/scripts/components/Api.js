export class Api {
  constructor({ adress, cohort, headers }) {
    this._adress = adress;
    this._cohort = cohort;
    this._headers = headers;
  }

  _checkServerAnswer(res) {
    if (res.ok) {
      return res.json()
    }

    return Promise.reject(`Что-то пошло не так: ${res.status}`)
  }

  getUserInfo() {
    return fetch(`${this._adress}${this._cohort}/users/me`, {
      headers: this._headers
    })
      .then((res) => this._checkServerAnswer(res));
  }

  getInitialCards() {
    return fetch(`${this._adress}${this._cohort}/cards`, {
      headers: this._headers
    })
    .then((res) => this._checkServerAnswer(res));
  }

  editUserInfo({ name, about }) {
    return fetch(`${this._adress}${this._cohort}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about
      })
    })
    .then((res) => this._checkServerAnswer(res));
  }

  addCard({ name, link }) {
    return fetch(`${this._adress}${this._cohort}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link
      })
    })
    .then((res) => this._checkServerAnswer(res));
  }

  putLike(cardId) {
    return fetch(`${this._adress}${this._cohort}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: this._headers
    })
    .then((res) => this._checkServerAnswer(res));
  }

  deleteLike(cardId) {
    return fetch(`${this._adress}${this._cohort}/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then((res) => this._checkServerAnswer(res));
  }

  deleteCard(cardId) {
    return fetch(`${this._adress}${this._cohort}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then((res) => this._checkServerAnswer(res));
  }

  editAvatar({avatar}) {
    return fetch(`${this._adress}${this._cohort}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatar
      })
    })
    .then((res) => this._checkServerAnswer(res));
  }
}
