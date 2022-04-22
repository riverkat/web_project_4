const editButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".popup__close-button");
const popupForm = document.querySelector(".popup");

editButton.addEventListener("click", function () {
  popupForm.classList.add("popup_open");
});

closeButton.addEventListener("click", function () {
  popupForm.classList.remove("popup_open");
});
