export const popupProf = document.querySelector(".popup_type_profile");
export const popupGallery = document.querySelector(".popup_type_gallery");
export const profileAvatar = document.querySelector(".profile__avatar");

export const nameInput = document.querySelector(".popup__input_form_name");
export const jobInput = document.querySelector(".popup__input_form_profession");
export const openPopupButtonGallery = document.querySelector(
  ".profile__add-gallery"
);
export const openPopupButtonProf = document.querySelector(".profile__edit");
export const popups = document.querySelectorAll(".popup");
export const formValidator = {};

export const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit",
  inactiveButtonClass: "popup__submit_inactive",
  inputErrorClass: "popup__input_error",
  errorClass: "popup__error_visible",
};

export const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];
