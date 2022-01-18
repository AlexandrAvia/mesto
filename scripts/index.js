// Находим форму в DOM
let formElement = // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = // Воспользуйтесь инструментом .querySelector()
let jobInput = // Воспользуйтесь инструментом .querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);

//
const headerOpenPopupButton = document.querySelector('.header__about-button')
const popup = document.querySelector('.popup')
const popupCloseButton = document.querySelector('.popup__close')
const popupContainer = document.querySelector('.popup__container')

function openPopup(event) {
  event.preventDefault()
  popup.classList.add('popup_opened')
}

function closePopup() {
  popup.classList.remove('popup_opened')
}

headerOpenPopupButton.addEventListener('click', openPopup)
popupCloseButton.addEventListener('click', closePopup)

// popup.addEventListener('click', function(event) {
//   if(event.target === event.currentTarget) {
//     closePopup()
//   }
// })

popup.addEventListener('click', function(event) {
  if(!event.defaultPrevented) {
    closePopup()
  }
})
popupContainer.addEventListener('click', function(e) {
  e.preventDefault()
})
