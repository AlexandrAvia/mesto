export default class UserInfo {
  constructor({ nameSelector, professionselector }) {
    this._name = document.querySelector(nameSelector);
    this._profession = document.querySelector(professionselector);
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
}
