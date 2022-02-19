const popupProf = document.querySelector('.popup_type_profile')
const popupGallery = document.querySelector('.popup_type_gallery')
const popupImage = document.querySelector('.popup_type_photo')
const closePopupImage = document.querySelector('.popup__close_photo')
const popupCloseButton = document.querySelector('.popup__close')
const formElement = document.querySelector('.popup__form_profile')
const formsave = document.querySelector('.popup__submit_profile')
const nameInput = document.querySelector('.popup__input_form_name')
const jobInput = document.querySelector('.popup__input_form_profession')
const profileName = document.querySelector('.profile__name')
const profileProfession = document.querySelector('.profile__profession')
const openPopupButtonGallery = document.querySelector('.profile__add-gallery')
const openPopupButtonProf = document.querySelector('.profile__edit')
const closeButtonPopupGallAdd = document.querySelector('.popup__close_gallery')
const imageTitleform = document.querySelector('.popup__input_form_image-title')
const imagesrcform = document.querySelector('.popup__input_form_image-src')
const cardAddbutton = document.querySelector('.popup__submit_add')
const galleryAddform = document.querySelector('.popup__form_gallery')
const template = document.querySelector('.element-template').content;
const elements = document.querySelector('.element')

function openPopup(popup) {
  popup.classList.add('popup_opened')
}

function closePopup(popup) {
  popup.classList.remove('popup_opened')
}

function openPopupProfEdit() {
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


openPopupButtonProf.addEventListener('click', openPopupProfEdit)
popupCloseButton.addEventListener('click', closePopupProfEdit)
formElement.addEventListener('submit', formSubmitHandler)



function openPopupGallAdd() {
  openPopup(popupGallery)
  imageTitleform.value = ''
  imagesrcform.value = ''
}

function closePopupGallAdd() {
  closePopup(popupGallery)
}

openPopupButtonGallery.addEventListener('click', openPopupGallAdd)
closeButtonPopupGallAdd.addEventListener('click', closePopupGallAdd)


function cardCreate(name, link) {
  const newCard = template.cloneNode(true)
  const imageCard = newCard.querySelector('.element__image')
  const imageTitle = newCard.querySelector('.element__title')

  imageTitle.textContent = name
  imageCard.src = link
  imageCard.alt = name

  newCard.querySelector('.element__like-button').addEventListener('click', likeCard)
  newCard.querySelector('.element__delete-button').addEventListener('click', deleteCard)
  imageCard.addEventListener('click', openImage)
  closePopupImage.addEventListener('click',closeImage)

  return newCard
}

function addCard(name, link) {
  elements.prepend(cardCreate(name, link))
}

initialCards.forEach((card) => addCard(card.name, card.link))

function cardSubmit(evt) {
  evt.preventDefault();
  addCard(imageTitleform.value, imagesrcform.value)
  closePopupGallAdd()
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
  document.querySelector('.popup__image-title').textContent = evt.target.alt;
  document.querySelector('.popup__image-title').alt =  evt.target.alt;
  document.querySelector('.popup__image').src = evt.target.src;
}

function closeImage() {
  closePopup(popupImage)
}








