export default class UserInfo {
  constructor({ nameSelector, professionselector, avatarSelector }) {
    this._name = document.querySelector(nameSelector);
    this._profession = document.querySelector(professionselector);
    this._avatar = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      profession: this._profession.textContent,
    };
  }
  setUserInfo(name, job) {
    this._name.textContent = name;
    this._profession.textContent = job;
  }
  setAvatar(link) {
    this._avatar.style.backgroundImage = `url(${link})`;
  }
}
