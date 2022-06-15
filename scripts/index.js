import Card from "./Card";
import { closePopup, openPopup } from "./utils.js";
import FormValidator from "./FormValidator.js";

//Constants
const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

const formValidationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

//Wrappers
const editPopupWindow = document.querySelector(".edit-popup");
const createPopupWindow = document.querySelector(".create-popup");
const editForm = document.forms.edit;
const createForm = document.forms.create;
const cardWrap = document.querySelector(".elements__container");

//Buttons, elements
const editButton = document.querySelector(".profile__edit-button");
const createButton = document.querySelector(".profile__add-button");
const submitButton = document.querySelector(".popup__button");

//Form data
const profileName = document.querySelector(".profile__name");
const profileBio = document.querySelector(".profile__bio");
const inputName = editForm.elements.name;
const inputBio = editForm.elements.bio;
const inputTitle = createForm.elements.title;
const inputLink = createForm.elements.link;

function fillProfileForm() {
  inputName.value = profileName.textContent;
  inputBio.value = profileBio.textContent;
}

function handleEditFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = inputName.value;
  profileBio.textContent = inputBio.value;
  closePopup(editPopupWindow);
  const popupForm = editPopupWindow.querySelector(".popup__form");
  popupForm.reset();
  editFormValidator.disableSubmitButton();
}

function handleCreateFormSubmit(evt) {
  evt.preventDefault();

  renderCard(
    {
      name: inputTitle.value,
      link: inputLink.value,
    },
    cardWrap
  );

  closePopup(createPopupWindow);
  const popupForm = createPopupWindow.querySelector(".popup__form");
  popupForm.reset();
  createFormValidator.disableSubmitButton();
}

editForm.addEventListener("submit", handleEditFormSubmit);

createForm.addEventListener("submit", handleCreateFormSubmit);

editButton.addEventListener("click", () => {
  fillProfileForm();
  openPopup(editPopupWindow);
});

createButton.addEventListener("click", () => {
  openPopup(createPopupWindow);
});

//Render
const renderCard = (data, wrapper) => {
  const card = new Card(data, "#card__template").generateCard();
  wrapper.prepend(card);
};

initialCards.forEach((data) => {
  renderCard(data, cardWrap);
});

//Validation
const createFormValidator = new FormValidator(formValidationConfig, createForm);
createFormValidator.enableValidation();

const editFormValidator = new FormValidator(formValidationConfig, editForm);
editFormValidator.enableValidation();
