export class UserInfo {
  constructor(name, about) {
    this._name = name;
    this._about = about;
  }

  getUserInfo() {
    this._userObj = {};
    this._userObj.name = this._name.textContent;
    this._userObj.about = this._about.textContent;
    return this._userObj;
  }

  setUserInfo(item) {
    this._name.textContent = item.name;
    this._about.textContent = item.about;
  }
}
