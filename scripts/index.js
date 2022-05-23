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
const cardPopupWindow = document.querySelector(".card-popup");
const editForm = document.querySelector(".popup__edit-form");
const createForm = document.querySelector(".popup__create-form");
const cardWrap = document.querySelector(".elements__container");

//Buttons, elements
const editButton = document.querySelector(".profile__edit-button");
const createButton = document.querySelector(".profile__add-button");
const closeEditButton = document.querySelector(".edit-popup__close-button");
const closeCreateButton = document.querySelector(".create-popup__close-button");
const cardPopupClose = document.querySelector(".card-popup__close-button");

//Form data
const profileName = document.querySelector(".profile__name");
const profileBio = document.querySelector(".profile__bio");
const inputName = editForm.querySelector(".popup__input_type_name");
const inputBio = editForm.querySelector(".popup__input_type_bio");
const inputTitle = createForm.querySelector(".popup__input_type_title");
const inputLink = createForm.querySelector(".popup__input_type_link");

const isEscEvent = (evt, action) => {
  const activePopup = document.querySelector(".popup_open");
  if (evt.key === "Escape") {
    action(activePopup);
  }
};

function handleEscEvent(evt) {
  evt.preventDefault();
  isEscEvent(evt, closePopup);
}

function openPopup(popupWindow) {
  popupWindow.classList.add("popup_open");
  document.addEventListener("keydown", handleEscEvent);
}

function closePopup(popupWindow) {
  popupWindow.classList.remove("popup_open");
  document.addEventListener("keydown", handleEscEvent);
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
}

editForm.addEventListener("submit", handleEditFormSubmit);
createForm.addEventListener("submit", handleCreateFormSubmit);
editButton.addEventListener("click", () => {
  fillProfileForm();
  openPopup(editPopupWindow);
});
closeEditButton.addEventListener("click", () => {
  closePopup(editPopupWindow);
});
createButton.addEventListener("click", () => {
  openPopup(createPopupWindow);
});
closeCreateButton.addEventListener("click", () => {
  closePopup(createPopupWindow);
});

editPopupWindow.addEventListener("mousedown", (evt) => {
  if (
    evt.target.classList.contains("popup") ||
    evt.target.classList.contains("popup__close")
  ) {
    closePopup(editPopupWindow);
  }
});

createPopupWindow.addEventListener("mousedown", (evt) => {
  if (
    evt.target.classList.contains("popup") ||
    evt.target.classList.contains("popup__close")
  ) {
    closePopup(createPopupWindow);
  }
});

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitle = cardElement.querySelector(".card__title");
  const cardImage = cardElement.querySelector(".card__image");
  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__delete-button");

  cardTitle.textContent = data.name;
  cardImage.style.backgroundImage = `url('${data.link}')`;

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });

  deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  cardElement.querySelector(".card__image").addEventListener("click", () => {
    const cardPopupImage = cardPopupWindow.querySelector(".card-popup__image");
    const cardPopupCaption = cardPopupWindow.querySelector(
      ".card-popup__subtitle"
    );
    cardPopupCaption.textContent = data.name;
    cardPopupImage.src = data.link;
    cardPopupImage.setAttribute("alt", "Photo of " + data.name);

    openPopup(cardPopupWindow);
  });

  return cardElement;
}

cardPopupClose.addEventListener("click", () => {
  closePopup(cardPopupWindow);
});

cardPopupWindow.addEventListener("mousedown", (evt) => {
  if (
    evt.target.classList.contains("popup") ||
    evt.target.classList.contains("popup__close")
  ) {
    closePopup(cardPopupWindow);
  }
});

const renderCard = (data, wrapper) => {
  const newCard = getCardElement(data);
  wrapper.prepend(newCard);
};

initialCards.forEach((data) => {
  renderCard(data, cardWrap);
});
