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
  profileAvatar,
} from "../constants/constant.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import { api } from "../components/Api.js";

let userId;

api.getProfile().then((res) => {
  userInfo.setUserInfo(res.name, res.about);
  userInfo.setAvatar(res.avatar);
  userId = res._id;
});

api.getInitialCards().then((cardList) => {
  cardList.forEach((res) => {
    createCard({
      name: res.name,
      link: res.link,
      likes: res.likes,
      id: res._id,
      userId: userId,
      ownerId: res.owner._id,
    });
    section.render();
  });
});

const submitProfile = (res) => {
  const { name, profession } = res;
  popupProfile.renderLoading(true);
  api
    .editProfile(name, profession)
    .then((res) => {
      userInfo.setUserInfo(res.name, res.about);
      popupProfile.close();
    })
    .finally(() => {
      popupProfile.renderLoading(false);
    });
};

function submitCard(item) {
  popupGallery.renderLoading(true);
  api
    .addCard(item.place, item.url)
    .then((res) => {
      createCard({
        name: res.name,
        link: res.link,
        likes: res.likes,
        id: res._id,
        userId: userId,
        ownerId: res.owner._id,
      });
      popupGallery.close();
    })
    .finally(() => {
      popupProfile.renderLoading(false);
    });
}

function submitAvatar(fields) {
  popupAvatar.renderLoading(true);
  api
    .avatarUpdate(fields.avatar)
    .then((res) => {
      userInfo.setAvatar(res.avatar);
      popupAvatar.close();
    })
    .finally(() => {
      popupAvatar.renderLoading(false);
    });
}

const section = new Section(
  {
    items: [],
    renderer: createCard,
  },
  ".element"
);

function createCard(item) {
  const card = new Card(
    item,
    ".element-template",
    openImage,
    (id) => {
      popupConfirm.open();
      popupConfirm.changeSubmit(() => {
        api.deleteCard(id).then((res) => {
          card.deleteCard();
          popupConfirm.close();
        });
      });
    },
    (id) => {
      if (card.isLiked()) {
        api.deleteLike(id).then((res) => {
          card.setLikes(res.likes);
        });
      } else {
        api.addLike(id).then((res) => {
          card.setLikes(res.likes);
        });
      }
    }
  );
  const elementCard = card.cardCreate();
  section.addItem(elementCard);
}

function openImage(name, link) {
  popupWithImage.open(name, link);
}

section.render();

openPopupButtonProf.addEventListener("click", openPopupProf);
openPopupButtonGallery.addEventListener("click", openPopupGallery);
profileAvatar.addEventListener("click", openPopupAvatar);

function openPopupAvatar() {
  formValidator["form__avatar"].resetErrors();
  popupAvatar.open();
}

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
  avatarSelector: ".profile__avatar",
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

const popupAvatar = new PopupWithForm(".popup_type_avatar", submitAvatar);
popupAvatar.setEventListeners();

const popupConfirm = new PopupWithForm(".popup_type_confirmation");
popupConfirm.setEventListeners();
