export class Card {
  constructor(
    item,
    userId,
    cardTemplateSelector,
    handleImageClick,
    handleDeleteClick,
    handleLikeClick
  ) {
    this._template = document.querySelector(cardTemplateSelector).content;
    this._name = item.name;
    this._link = item.link;
    this._likes = item.likes;
    this._id = item._id;
    this._userId = userId;
    this._ownerId = item.owner._id;

    this._handleImageClick = handleImageClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
  }

  _likeCard = () => {
    this._likeButton.classList.add("element__like-button_active");
  };

  _unlikeCard = () => {
    this._likeButton.classList.remove("element__like-button_active");
  };

  deleteCard = () => {
    this._newCard.remove();
    this._newCard = null;
  };

  setLikes(newLikes) {
    this._likes = newLikes;
    const likeCountElement = this._newCard.querySelector(
      ".element__like-count"
    );
    likeCountElement.textContent = this._likes.length;
    if (this.isLiked()) {
      this._likeCard();
    } else {
      this._unlikeCard();
    }
  }

  _setEventListeners() {
    const deleteButton = this._newCard.querySelector(".element__delete-button");
    this._likeButton.addEventListener("click", () =>
      this._handleLikeClick(this._id)
    );
    deleteButton.addEventListener("click", () =>
      this._handleDeleteClick(this._id)
    );
    this._imageCard.addEventListener("click", () =>
      this._handleImageClick(this._name, this._link)
    );
  }

  isLiked() {
    const userLikedCard = this._likes.find((user) => user._id === this._userId);
    return userLikedCard;
  }

  cardCreate() {
    this._newCard = this._template
      .querySelector(".element__card")
      .cloneNode(true);
    this._imageCard = this._newCard.querySelector(".element__image");
    const imageTitle = this._newCard.querySelector(".element__title");
    this._likeButton = this._newCard.querySelector(".element__like-button");
    this.setLikes(this._likes);
    imageTitle.textContent = this._name;
    this._imageCard.src = this._link;
    this._imageCard.alt = this._name;
    if (this._ownerId !== this._userId) {
      this._newCard.querySelector(".element__delete-button").style.display =
        "none";
    }

    this._setEventListeners();

    return this._newCard;
  }
}
