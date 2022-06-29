import Card from "./components/Card.js";
import { closePopup, openPopup } from "./utils/utils.js";
import FormValidator from "./FormValidator.js";
import { initialCards, formValidationConfig } from "./utils/constants.js";
import { cardWrap } from "./utils/constants.js";
import Section from "./components/Section.js";
import {
  editForm,
  editButton,
  createForm,
  createButton,
} from "./utils/constants.js";

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
//const renderCard = (data, wrapper) => {
//const card = new Card(data, "#card__template").generateCard();
//wrapper.prepend(card);
//};

//initialCards.forEach((data) => {
//renderCard(data, cardWrap);
//});

const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item, ".card");
      const cardElement = card.generateCard();
      cardList.addItem(cardElement);
    },
  },
  cardWrap
);

//Validation
const createFormValidator = new FormValidator(formValidationConfig, createForm);
createFormValidator.enableValidation();

const editFormValidator = new FormValidator(formValidationConfig, editForm);
editFormValidator.enableValidation();
