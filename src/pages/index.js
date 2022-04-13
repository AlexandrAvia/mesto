import "./index.css";
import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import {
  validationConfig,
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
import { api } from "../components/Api.js";

api.getProfile().then((res) => {
  userInfo.setUserInfo(res.name, res.about);
});

api.getInitialCards().then((cardList) => {
  cardList.forEach((data) => {
    const card = createCard({
      name: data.name,
      link: data.link,
      likes: data.likes,
    });
    section.render(card);
  });
});

const submitProfile = (res) => {
  const { name, profession } = res;
  api.editProfile(name, profession).then((res) => {
    userInfo.setUserInfo(res.name, res.about);
  });
  popupProfile.close();
};

function submitCard(item) {
  api.addCard(item.place, item.url).then((res) => {
    console.log(res);
    createCard({
      name: res.name,
      link: res.link,
      likes: res.likes,
    });
  });

  popupGallery.close();
}

const section = new Section(
  {
    items: [],
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

const popupGallery = new PopupWithForm(".popup_type_gallery", submitCard);
popupGallery.setEventListeners();

const popupProfile = new PopupWithForm(".popup_type_profile", submitProfile);
popupProfile.setEventListeners();

const popupWithImage = new PopupWithImage(".popup_type_photo");
popupWithImage.setEventListeners();
