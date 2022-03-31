import "./index.css";
import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import {
  validationConfig,
  initialCards,
  popupProf,
  popupGallery,
  profileForm,
  nameInput,
  jobInput,
  profileName,
  profileProfession,
  openPopupButtonGallery,
  openPopupButtonProf,
  imageTitleform,
  imageSrcForm,
  elements,
  galleryAddform,
} from "../constants/constant.js";
import Section from "../components/Section.js";
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";

const section = new Section(
  {
    items: initialCards,
    renderer: cardCreateRender,
  },
  ".element"
);

function cardCreate(item) {
  const card = new Card(item, ".element-template", openImage);
  const elementCard = card.cardCreate();
  return elementCard;
}

function openImage(name, link) {
  popupWithImage.open(name, link);
}

function cardCreateRender(item) {
  const elementCard = cardCreate(item);
  section.addItem(elementCard);
}

section.render();

const popupWithImage = new PopupWithImage(".popup_type_photo");
popupWithImage.setEventListeners();
const popupProfile = new PopupWithForm(".popup_type_profile", submitProfile);

function submitProfile(data) {
  const { name, job } = data;
  userInfo.setUserInfo(name, job);
  popupProfile.close();
}

openPopupButtonProf.addEventListener("click", openPopupProf);

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  professionselector: ".profile__profession",
});

/* function openPopup(popup) {
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

const editProfileValidator = new FormValidator(validationConfig, profileForm);
const addCardValidator = new FormValidator(validationConfig, galleryAddform);

editProfileValidator.enableValidation();
addCardValidator.enableValidation();

function openImage(name, link) {
  popupImageTitle.textContent = name;
  popupPicture.alt = name;
  popupPicture.src = link;
  openPopup(popupImage);
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
}); */
