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
const editPopupWindow = document.querySelector(".edit-popup");
const createPopupWindow = document.querySelector(".create-popup");
const editForm = document.querySelector(".popup__edit-form");
const createForm = document.querySelector(".popup__create-form");
const cardWrap = document.querySelector(".elements__container");

//Buttons, elements
const editButton = document.querySelector(".profile__edit-button");
const createButton = document.querySelector(".profile__add-button");
const closeEditButton = document.querySelector(".edit-popup__close-button");
const closeCreateButton = document.querySelector(".create-popup__close-button");

//Form data
const profileName = document.querySelector(".profile__name");
const profileBio = document.querySelector(".profile__bio");
const inputName = editForm.querySelector(".popup__input_type_name");
const inputBio = editForm.querySelector(".popup__input_type_bio");
const inputTitle = createForm.querySelector(".popup__input_type_title");
const inputLink = createForm.querySelector(".popup__input_type_link");

function togglePopupVisibility(popupWindow) {
  if (!popupWindow.classList.contains("popup_open")) {
    inputName.value = profileName.textContent;
    inputBio.value = profileBio.textContent;
  }

  popupWindow.classList.toggle("popup_open");
}

function handleEditFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = inputName.value;
  profileBio.textContent = inputBio.value;

  togglePopupVisibility(editPopupWindow);
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

  togglePopupVisibility(createPopupWindow);
}

editForm.addEventListener("submit", handleEditFormSubmit);
createForm.addEventListener("submit", handleCreateFormSubmit);
editButton.addEventListener("click", () => {
  togglePopupVisibility(editPopupWindow);
});
closeEditButton.addEventListener("click", () => {
  togglePopupVisibility(editPopupWindow);
});
createButton.addEventListener("click", () => {
  togglePopupVisibility(createPopupWindow);
});
closeCreateButton.addEventListener("click", () => {
  togglePopupVisibility(createPopupWindow);
});

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__delete-button");

  cardElement.querySelector(".card__title").textContent = data.name;
  cardElement.querySelector(
    ".card__image"
  ).style.backgroundImage = `url('${data.link}')`;

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });

  deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  return cardElement;
}

const renderCard = (data, wrapper) => {
  const newCard = getCardElement(data);
  wrapper.prepend(newCard);
};

initialCards.forEach((data) => {
  renderCard(data, cardWrap);
});
