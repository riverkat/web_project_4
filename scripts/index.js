//Wrappers
const editPopupWindow = document.querySelector(".edit-popup");
const createPopupWindow = document.querySelector(".create-popup");
const editForm = document.forms.edit;
const createForm = document.forms.create;
const cardWrap = document.querySelector(".elements__container");

//Buttons, elements
const editButton = document.querySelector(".profile__edit-button");
const createButton = document.querySelector(".profile__add-button");
const closeEditButton = document.querySelector(".edit-popup__close-button");
const closeCreateButton = document.querySelector(".create-popup__close-button");

//Form data
const profileName = document.querySelector(".profile__name");
const profileBio = document.querySelector(".profile__bio");
const inputName = editForm.elements.name;
const inputBio = editForm.elements.bio;
const inputTitle = createForm.elements.title;
const inputLink = createForm.elements.link;

export function handleEscEvent(evt) {
  if (evt.key === "Escape") {
    const activePopup = document.querySelector(".popup_open");
    closePopup(activePopup);
  }
}

export function closePopupOnRemoteClick(evt) {
  if (
    evt.target.classList.contains("popup") ||
    evt.target.classList.contains("popup__close-button")
  ) {
    const activePopup = document.querySelector(".popup_open");
    closePopup(activePopup);
  }
}

export function openPopup(popupWindow) {
  popupWindow.classList.add("popup_open");
  document.addEventListener("keydown", handleEscEvent);
  document.addEventListener("mousedown", closePopupOnRemoteClick);
}

function closePopup(popupWindow) {
  popupWindow.classList.remove("popup_open");
  document.removeEventListener("keydown", handleEscEvent);
  document.removeEventListener("mousedown", closePopupOnRemoteClick);
}

function resetPopupForm(popupForm) {
  popupForm.reset();
  const submitButton = popupForm.querySelector(
    validationConfig.submitButtonSelector
  );
  toggleButtonState(submitButton, validationConfig.inactiveButtonClass);
}

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
  resetPopupForm(popupForm);
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
  resetPopupForm(popupForm);
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
