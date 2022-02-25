

function showInputError(formElement, inputElement, errorMessage) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(params.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(params.errorClass);
}

function hideInputError(formElement, inputElement) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(params.inputErrorClass);
  errorElement.classList.remove(params.errorClass);
  errorElement.textContent = "";
}

function checkInputValidity(formElement, inputElement) {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage
    );
  } else {
    hideInputError(formElement, inputElement);
  }
}

function setEventListeners(formElement) {
  const inputList = Array.from(
    formElement.querySelectorAll(params.inputSelector)
  );
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(
        inputList,
        formElement.querySelector(params.submitButtonSelector)
      );
    });
  });
}

function enableValidation() {
  const formList = Array.from(document.querySelectorAll(params.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
}

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function toggleButtonState(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    disableSubmitButton(buttonElement)
  } else {
    enableSubmitButton(buttonElement)
  }
}

function enableSubmitButton(buttonElement) {
  buttonElement.classList.remove(params.inactiveButtonClass);
  buttonElement.removeAttribute("disabled");
}

function disableSubmitButton(buttonElement) {
  buttonElement.classList.add(params.inactiveButtonClass);
  buttonElement.setAttribute("disabled", true);
}



enableValidation(params)

