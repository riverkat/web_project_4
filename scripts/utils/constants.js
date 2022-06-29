//Constants
export const cardPopupWindow = document.querySelector(".card-popup");
export const cardPopupImage = document.querySelector(".card-popup__image");
export const cardPopupCaption = document.querySelector(".card-popup__subtitle");
export const cardPopupClose = document.querySelector(
  ".card-popup__close-button"
);

export const initialCards = [
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

export const formValidationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

//Wrappers
export const editPopupWindow = document.querySelector(".edit-popup");
export const createPopupWindow = document.querySelector(".create-popup");
export const editForm = document.forms.edit;
export const createForm = document.forms.create;
export const cardWrap = document.querySelector(".elements__container");

//Buttons, elements
export const editButton = document.querySelector(".profile__edit-button");
export const createButton = document.querySelector(".profile__add-button");
export const submitButton = document.querySelector(".popup__button");

//Form data
export const profileName = document.querySelector(".profile__name");
export const profileBio = document.querySelector(".profile__bio");
export const inputName = editForm.elements.name;
export const inputBio = editForm.elements.bio;
export const inputTitle = createForm.elements.title;
export const inputLink = createForm.elements.link;
