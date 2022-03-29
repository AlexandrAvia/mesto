import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._popupPicture = document.querySelector(".popup__image");
    this._popupImageTitle = document.querySelector(".popup__image-title");
  }

  open(name, link) {
    this._popupImageTitle.textContent = name;
    this._popupPicture.alt = name;
    this._popupPicture.src = link;
    super.open();
  }
}
