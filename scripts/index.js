let popupProf = document.querySelector('.popup_type_profile')
let popupGallery = document.querySelector('.popup_type_gallery')
let popupImage = document.querySelector('.popup_type_photo')
let closePopupImage = document.querySelector('.popup__close_photo')
let popupCloseButton = document.querySelector('.popup__close')
let formElement = document.querySelector('.popup__form_profile')
let formsave = document.querySelector('.popup__submit_profile')
let nameInput = document.querySelector('.popup__input_form_name')
let jobInput = document.querySelector('.popup__input_form_profession')
let profileName = document.querySelector('.profile__name')
let profileProfession = document.querySelector('.profile__profession')
let OpenPopupButtonGallery = document.querySelector('.profile__add-gallery')
let OpenPopupButtonProf = document.querySelector('.profile__edit')
let CloseButtonPopupGallAdd = document.querySelector('.popup__close_gallery')
let imageTitleform = document.querySelector('.popup__input_form_image-title')
let imagesrcform = document.querySelector('.popup__input_form_image-src')
let cardAddbutton = document.querySelector('.popup__submit_add')
let galleryAddform = document.querySelector('.popup__form_gallery')
let template = document.querySelector('.element-template').content;
let elements = document.querySelector('.element')

function openPopup(popup) {
  popup.classList.add('popup_opened')
}

function closePopup(popup) {
  popup.classList.remove('popup_opened')
}

function OpenPopupProfEdit() {
  openPopup(popupProf)
  nameInput.value = profileName.textContent
  jobInput.value = profileProfession.textContent;
}

function closePopupProfEdit() {
  closePopup(popupProf)
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileProfession.textContent = jobInput.value;
  closePopup(popupProf);
}


OpenPopupButtonProf.addEventListener('click', OpenPopupProfEdit)
popupCloseButton.addEventListener('click', closePopupProfEdit)
formElement.addEventListener('submit', formSubmitHandler)



function OpenPopupGallAdd() {
  openPopup(popupGallery)
  imageTitleform.value = ''
  imagesrcform.value = ''
}

function ClosePopupGallAdd() {
  closePopup(popupGallery)
}

OpenPopupButtonGallery.addEventListener('click', OpenPopupGallAdd)
CloseButtonPopupGallAdd.addEventListener('click', ClosePopupGallAdd)


function cardCreate(name, link) {
  let newCard = template.cloneNode(true)
  let imageCard = newCard.querySelector('.element__image')
  let imageTitle = newCard.querySelector('.element__title')

  imageTitle.textContent = name
  imageCard.src = link
  imageCard.alt = name

  newCard.querySelector('.element__like-button').addEventListener('click', likeCard)
  newCard.querySelector('.element__delete-button').addEventListener('click', deleteCard)
  imageCard.addEventListener('click', openImage)
  closePopupImage.addEventListener('click',closeImage)

  elements.prepend(newCard)
}

initialCards.forEach((card) => cardCreate(card.name, card.link))

function cardSubmit(evt) {
  evt.preventDefault();
  cardCreate(imageTitleform.value, imagesrcform.value)
  ClosePopupGallAdd()
}

galleryAddform.addEventListener('submit', cardSubmit)

function deleteCard(event) {
  event.target.closest(".element__card").remove();
}

function likeCard(event) {
  event.target.classList.toggle("element__like-button_active");
}

function openImage(evt) {
  openPopup(popupImage);
  document.querySelector('.popup__image-title').textContent =  evt.target.alt;
  document.querySelector('.popup__image').src = evt.target.src;
}

function closeImage() {
  closePopup(popupImage)
}








