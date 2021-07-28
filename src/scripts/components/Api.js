export class Api {
  constructor({ adress, cohort, headers }) {
    this._adress = adress;
    this._cohort = cohort;
    this._headers = headers;
  }

  getUserInfo() {
    return fetch(`${this._adress}${this._cohort}/users/me`, {
      headers: this._headers
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }

        return Promise.reject(`Что-то пошло не так: ${res.status}`)
      })
  }

  getInitialCards() {
    return fetch(`${this._adress}${this._cohort}/cards`, {
      headers: this._headers
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }

        return Promise.reject(`Что-то пошло не так: ${res.status}`)
      })
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
      .then((res) => {
        if (res.ok) {
          return res.json()
        }

        return Promise.reject(`Что-то пошло не так: ${res.status}`)
      })
  }

  addCard({name, link}) {
    return fetch(`${this._adress}${this._cohort}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link
      })
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }

        return Promise.reject(`Что-то пошло не так: ${res.status}`)
      })
  }
}
