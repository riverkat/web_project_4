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

const cardTemplate = document
  .querySelector("#card__template")
  .content.querySelector(".elements__item");

//Wrappers
const popupWindow = document.querySelector(".popup");
const editForm = document.querySelector(".popup__form");
const cardWrap = document.querySelector(".elements__container");

//Buttons, elements
const editButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".popup__close-button");
const likeButton = document.querySelectorAll(".card__button");

//Form data
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
//likeButton.addEventListener("click", toggleLikeButton);

const getCardElement = (data) => {
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector(".card__title").textContent = data.name;
  cardElement.querySelector(
    ".card__image"
  ).style.backgroundImage = `url('${data.link}')`;

  return cardElement;
};

const renderCard = (data, wrapper) => {
  const newCard = getCardElement(data);
  wrapper.prepend(newCard);
};

initialCards.forEach((data) => {
  renderCard(data, cardWrap);
});

//function toggleLikeButton() {
//likeButton.classList.toggle("card__button_active");
//}
