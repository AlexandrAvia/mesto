let OpenPopupButton = document.querySelector('.profile__edit')
let popup = document.querySelector('.popup')
let popupCloseButton = document.querySelector('.popup__close')
let formElement = document.querySelector('.popup__form')
let formsave = document.querySelector('.popup__submit')
let nameInput = document.querySelector('.popup__name')
let jobInput = document.querySelector('.popup__profession')
let profileName = document.querySelector('.profile__name')
let profileProfession = document.querySelector('.profile__profession')

function openPopup() {
  popup.classList.add('popup__opened')
  nameInput.value = profileName.textContent
  jobInput.value = profileProfession.textContent;
}

function closePopup() {
  popup.classList.remove('popup__opened')
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileProfession.textContent = jobInput.value;
  closePopup();
}

OpenPopupButton.addEventListener('click', openPopup)
popupCloseButton.addEventListener('click', closePopup)
formElement.addEventListener('submit', formSubmitHandler)

