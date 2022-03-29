import "./index.css";
import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import { validationConfig, initialCards } from "../scripts/constant.js";
const popupProf = document.querySelector(".popup_type_profile");
const popupGallery = document.querySelector(".popup_type_gallery");
const profileForm = document.querySelector(".popup__form_profile");
const nameInput = document.querySelector(".popup__input_form_name");
const jobInput = document.querySelector(".popup__input_form_profession");
const profileName = document.querySelector(".profile__name");
const profileProfession = document.querySelector(".profile__profession");
const openPopupButtonGallery = document.querySelector(".profile__add-gallery");
const openPopupButtonProf = document.querySelector(".profile__edit");
const imageTitleform = document.querySelector(".popup__input_form_image-title");
const imageSrcForm = document.querySelector(".popup__input_form_image-src");
const galleryAddform = document.querySelector(".popup__form_gallery");
const elements = document.querySelector(".element");
const popups = document.querySelectorAll(".popup");

/* this._popupImage = document.querySelector(".popup_type_photo"); */

const editProfileValidator = new FormValidator(validationConfig, profileForm);
const addCardValidator = new FormValidator(validationConfig, galleryAddform);

editProfileValidator.enableValidation();
addCardValidator.enableValidation();

/* function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupKeyEsc);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupKeyEsc);
} */

/* function closePopupKeyEsc(evt) {
  if (evt.key === "Escape") {
    closePopup(document.querySelector(".popup_opened"));
  }
} */

function openPopupProfEdit() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileProfession.textContent;
  editProfileValidator.resetErrors();
  openPopup(popupProf);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileProfession.textContent = jobInput.value;
  closePopup(popupProf);
}

openPopupButtonProf.addEventListener("click", openPopupProfEdit);
profileForm.addEventListener("submit", handleProfileFormSubmit);

function openPopupGallAdd() {
  galleryAddform.reset();
  openPopup(popupGallery);
  addCardValidator.disableSubmitButton();
}

openPopupButtonGallery.addEventListener("click", openPopupGallAdd);

function addCard(name, link) {
  elements.prepend(cardCreate(name, link));
}

initialCards.forEach((card) => addCard(card.name, card.link));

function handleCardSubmitForm(evt) {
  evt.preventDefault();
  addCard(imageTitleform.value, imageSrcForm.value);
  closePopup(popupGallery);
}

galleryAddform.addEventListener("submit", handleCardSubmitForm);

function cardCreate(link, title) {
  const card = new Card(link, title, ".element-template", openImage);
  return card.cardCreate();
}

/* function openImage(name, link) {
  popupImageTitle.textContent = name;
  popupPicture.alt = name;
  popupPicture.src = link;
  openPopup(popupImage);
} */

/* popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup_opened")) {
      closePopup(popup);
    }
    if (evt.target.classList.contains("popup__close")) {
      closePopup(popup);
    }
  });
}); */
