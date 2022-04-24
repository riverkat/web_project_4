const popupWindow = document.querySelector(".popup");
const editForm = document.querySelector(".popup__form");

const editButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".popup__close-button");
const profileName = document.querySelector(".profile__name");
const profileBio = document.querySelector(".profile__bio");

const inputName = editForm.querySelector(".popup__input_type_name");
const inputBio = editForm.querySelector(".popup__input_type_bio");

function togglePopupVisibility() {
  if (!popupWindow.classList.contains("popup_open")) {
    inputName.value = profileName.textContent;
    inputBio.value = profileBio.textContent;
  }

  popupWindow.classList.toggle("popup_open");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = inputName.value;
  profileBio.textContent = inputBio.value;

  togglePopupVisibility();
}

editForm.addEventListener("submit", handleProfileFormSubmit);
editButton.addEventListener("click", togglePopupVisibility);
closeButton.addEventListener("click", togglePopupVisibility);
