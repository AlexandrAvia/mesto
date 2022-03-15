export class Card {
  constructor(initialCards, cardTemplateSelector) {
    this._template = document.querySelector(cardTemplateSelector).content;
    this._name = initialCards.name;
    this._link = initialCards.link;
  }

  _likeCard = () => {
    this._likeButton.classList.toggle("element__like-button_active");
  };

  _deleteCard = () => {
    this._newCard.remove();
  };

  _openImage(evt) {
    openPopup(popupImage);
    popupImageTitle.textContent = evt.target.alt;
    popupPicture.alt = evt.target.alt;
    popupPicture.src = evt.target.src;
  }

  _setEventListeners() {
    const deleteButton = this._newCard.querySelector(".element__delete-button");
    this._likeButton.addEventListener("click", _likeCard);
    deleteButton.addEventListener("click", _deleteCard);
    this._imageCard.addEventListener("click", openImage);
  }

  cardCreate() {
    this._newCard = this._template.cloneNode(true);
    this._imageCard = this._newCard.querySelector(".element__image");
    const imageTitle = this._newCard.querySelector(".element__title");
    this._likeButton = this._newCard.querySelector(".element__like-button");

    imageTitle.textContent = this._name;
    this._imageCard.src = this._link;
    this._imageCard.alt = this._name;

    _setEventListeners();

    return newCard;
  }
}
