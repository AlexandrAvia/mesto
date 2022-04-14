import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmit) {
    super(popupSelector);

    this._formSubmit = formSubmit;
    this._form = this._popup.querySelector(".popup__form");
    this._input = [...this._form.querySelectorAll(".popup__input")];
    this._inputValues = {};
    this._button = this._form.querySelector(".popup__submit");
  }

  _getInputValues() {
    this._input.forEach((input) => {
      this._inputValues[input.name] = input.value;
    });
    return this._inputValues;
  }

  renderLoading(isLoading) {
    this._button.textContent = isLoading ? "Сохранение..." : "Сохранить";
  }

  changeSubmit(newSubmit) {
    this._formSubmit = newSubmit;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", () => {
      this._formSubmit(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}
