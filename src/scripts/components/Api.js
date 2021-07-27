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
}
