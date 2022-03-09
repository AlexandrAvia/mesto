import { FormValidator } from "./FormValidator.js";
const popupProf = document.querySelector(".popup_type_profile");
const popupGallery = document.querySelector(".popup_type_gallery");
const popupImage = document.querySelector(".popup_type_photo");
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
const template = document.querySelector(".element-template").content;
const elements = document.querySelector(".element");
const popups = document.querySelectorAll(".popup");
const popupPicture = document.querySelector(".popup__image");
const popupImageTitle = document.querySelector(".popup__image-title");
const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit",
  inactiveButtonClass: "popup__submit_inactive",
  inputErrorClass: "popup__input_error",
  errorClass: "popup__error_visible",
};

const editProfileValidator = new FormValidator(validationConfig, profileForm);
const addCardValidator = new FormValidator(validationConfig, galleryAddform);

editProfileValidator.enableValidation();
addCardValidator.enableValidation();

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupKeyEsc);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupKeyEsc);
}

function closePopupKeyEsc(evt) {
  if (evt.key === "Escape") {
    closePopup(document.querySelector(".popup_opened"));
  }
}

function openPopupProfEdit() {
  openPopup(popupProf);
  nameInput.value = profileName.textContent;
  jobInput.value = profileProfession.textContent;
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
  openPopup(popupGallery);
  addCardValidator.disableSubmitButton(
    popupGallery.querySelector(validationConfig.submitButtonSelector)
  );
}

openPopupButtonGallery.addEventListener("click", openPopupGallAdd);

function cardCreate(name, link) {
  const newCard = template.cloneNode(true);
  const imageCard = newCard.querySelector(".element__image");
  const imageTitle = newCard.querySelector(".element__title");

  imageTitle.textContent = name;
  imageCard.src = link;
  imageCard.alt = name;

  newCard
    .querySelector(".element__like-button")
    .addEventListener("click", likeCard);
  newCard
    .querySelector(".element__delete-button")
    .addEventListener("click", deleteCard);
  imageCard.addEventListener("click", openImage);

  return newCard;
}

function addCard(name, link) {
  elements.prepend(cardCreate(name, link));
}

initialCards.forEach((card) => addCard(card.name, card.link));

function handleCardSubmitForm(evt) {
  evt.preventDefault();
  addCard(imageTitleform.value, imageSrcForm.value);
  galleryAddform.reset();
  closePopup(popupGallery);
  addCardValidator.disableSubmitButton(
    popupGallery.querySelector(validationConfig.submitButtonSelector)
  );
}

galleryAddform.addEventListener("submit", handleCardSubmitForm);

function deleteCard(event) {
  event.target.closest(".element__card").remove();
}

function likeCard(event) {
  event.target.classList.toggle("element__like-button_active");
}

function openImage(evt) {
  openPopup(popupImage);
  popupImageTitle.textContent = evt.target.alt;
  popupPicture.alt = evt.target.alt;
  popupPicture.src = evt.target.src;
}

popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup_opened")) {
      closePopup(popup);
    }
    if (evt.target.classList.contains("popup__close")) {
      closePopup(popup);
    }
  });
});
