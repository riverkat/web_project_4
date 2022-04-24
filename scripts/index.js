const editButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".popup__close-button");
const popupForm = document.querySelector(".popup");

editButton.addEventListener("click", function () {
  popupForm.classList.add("popup_open");
});

closeButton.addEventListener("click", function () {
  popupForm.classList.remove("popup_open");
});

let formElement = document.querySelector(".popup__form");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  let nameInput = document.querySelector("#popupName");
  let jobInput = document.querySelector("#popupBio");

  console.log(nameInput.getAttribute("value"));

  let profileName = document.querySelector("#profileName");
  let profileBio = document.querySelector("#profileBio");

  profileName.textContent = nameInput.getAttribute("value");
}

formElement.addEventListener("submit", handleProfileFormSubmit);
