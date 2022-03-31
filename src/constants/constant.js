export const popupProf = document.querySelector(".popup_type_profile");
export const popupGallery = document.querySelector(".popup_type_gallery");
export const profileForm = document.querySelector(".popup__form_profile");
export const nameInput = document.querySelector(".popup__input_form_name");
export const jobInput = document.querySelector(".popup__input_form_profession");
export const profileName = document.querySelector(".profile__name");
export const profileProfession = document.querySelector(".profile__profession");
export const openPopupButtonGallery = document.querySelector(
  ".profile__add-gallery"
);
export const openPopupButtonProf = document.querySelector(".profile__edit");
export const imageTitleform = document.querySelector(
  ".popup__input_form_image-title"
);
export const imageSrcForm = document.querySelector(
  ".popup__input_form_image-src"
);
export const galleryAddform = document.querySelector(".popup__form_gallery");
export const elements = document.querySelector(".element");
export const popups = document.querySelectorAll(".popup");

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
