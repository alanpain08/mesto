export class UserInfo {
  constructor({ nameSelector, aboutSelector, avatarSelector }) {
    this._nameSelector = document.querySelector(nameSelector);
    this._aboutSelector = document.querySelector(aboutSelector);
    this._avatarSelector = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {
      name: this._nameSelector.textContent,
      about: this._aboutSelector.textContent
    }
  }

  setUserInfo({ name, about }) {
    this._nameSelector.textContent = name;
    this._aboutSelector.textContent = about;
  }

  updateAvatar({avatar}) {
    this._avatarSelector.src = avatar;
  }
}
