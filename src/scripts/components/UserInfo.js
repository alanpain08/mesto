export class UserInfo {
  constructor({ nameSelector, aboutSelector }) {
    this._nameSelector = document.querySelector(nameSelector);
    this._aboutSelector = document.querySelector(aboutSelector);
    this.name = '';
    this.about = '';
  }

  getUserInfo() {
    return {
      name: this.name,
      about: this.about
    }
  }

  setUserInfo({ name, about }) {
    this.name = name;
    this.about = about;
  }

  updateUserInfo() {
    this._nameSelector.textContent = this.name;
    this._aboutSelector.textContent = this.about;
  }
}
