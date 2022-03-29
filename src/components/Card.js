export class Card {
  constructor(name, link, cardTemplateSelector, handleImageClick) {
    this._template = document.querySelector(cardTemplateSelector).content;
    this._name = name;
    this._link = link;
    this._handleImageClick = handleImageClick;
  }

  _likeCard = () => {
    this._likeButton.classList.toggle("element__like-button_active");
  };

  _deleteCard = (evt) => {
    evt.target.closest(".element__card").remove();
    this._newCard = null;
  };

  _setEventListeners() {
    const deleteButton = this._newCard.querySelector(".element__delete-button");
    this._likeButton.addEventListener("click", this._likeCard);
    deleteButton.addEventListener("click", this._deleteCard);
    this._imageCard.addEventListener("click", () =>
      this._handleImageClick(this._name, this._link)
    );
  }

  cardCreate() {
    this._newCard = this._template.cloneNode(true);
    this._imageCard = this._newCard.querySelector(".element__image");
    const imageTitle = this._newCard.querySelector(".element__title");
    this._likeButton = this._newCard.querySelector(".element__like-button");

    imageTitle.textContent = this._name;
    this._imageCard.src = this._link;
    this._imageCard.alt = this._name;

    this._setEventListeners();

    return this._newCard;
  }
}