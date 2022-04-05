import "./index.css";
import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import {
  validationConfig,
  initialCards,
  nameInput,
  jobInput,
  openPopupButtonGallery,
  openPopupButtonProf,
  formValidator,
} from "../constants/constant.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";

const section = new Section(
  {
    items: initialCards,
    renderer: createCard,
  },
  ".element"
);

function createCard(item) {
  const card = new Card(item, ".element-template", openImage);
  const elementCard = card.cardCreate();
  section.addItem(elementCard);
}

function openImage(name, link) {
  popupWithImage.open(name, link);
}

section.render();

function submitCard(item) {
  createCard({
    name: item.place,
    link: item.url,
  });

  popupGallery.close();
}
openPopupButtonProf.addEventListener("click", openPopupProf);
openPopupButtonGallery.addEventListener("click", openPopupGallery);

function openPopupGallery() {
  formValidator["form__gallery"].resetErrors();
  popupGallery.open();
}

const enableValidation = (validationConfig) => {
  const formList = Array.from(
    document.querySelectorAll(validationConfig.formSelector)
  );
  formList.forEach((formElement) => {
    const validator = new FormValidator(validationConfig, formElement);
    const formName = formElement.getAttribute("name");
    formValidator[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(validationConfig);

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  professionselector: ".profile__profession",
});

function openPopupProf() {
  formValidator["form__profile"].resetErrors();
  popupProfile.open();
  const { name, profession } = userInfo.getUserInfo();
  nameInput.value = name;
  jobInput.value = profession;
}

const submitProfile = (data) => {
  const { name, profession } = data;
  userInfo.setUserInfo(name, profession);
  popupProfile.close();
};

const popupGallery = new PopupWithForm(".popup_type_gallery", submitCard);
popupGallery.setEventListeners();

const popupProfile = new PopupWithForm(".popup_type_profile", submitProfile);
popupProfile.setEventListeners();

const popupWithImage = new PopupWithImage(".popup_type_photo");
popupWithImage.setEventListeners();
