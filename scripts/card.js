const initialCards = [
  {
    title: "Yosemite Valley",
    image: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    title: "Lake Louise",
    image: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    title: "Bald Mountains",
    image: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    title: "Latemar",
    image: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    title: "Vanoise National Park",
    image: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    title: "Lago di Braies",
    image: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

const cardPopupWindow = document.querySelector(".card-popup");
const cardPopupImage = cardPopupWindow.querySelector(".card-popup__image");
const cardPopupCaption = cardPopupWindow.querySelector(".card-popup__subtitle");
const cardPopupClose = document.querySelector(".card-popup__close-button");

class Card {
  constructor(data, cardSelector) {
    this._title = data.title;
    this._image = data.image;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  renderCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector(
      ".card__image"
    ).style.backgroundImage = `url('${this._image}')`;
    this._element.querySelector(".card__title").textContent = this._title;

    return this._element;
  }

  _setEventListeners() {
    const cardPopupImage = this._element.querySelector(".card__image");
    cardPopupImage.addEventListener("click", () => {
      this._handleOpenPopup();
    });

    const likeButton = this._element.querySelector(".card__like-button");
    likeButton.addEventListener("click", () => {
      this._toggleLikeButton();
    });

    const deleteButton = this._element.querySelector(".card__delete-button");
    deleteButton.addEventListener("click", () => {
      this._element.remove();
    });

    cardPopupClose.addEventListener("click", () => {
      this._handleClosePopup();
    });
  }

  _toggleLikeButton() {
    this._element
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  }

  _handleOpenPopup() {
    cardPopupCaption.textContent = this._title;
    cardPopupImage.src = this._image;
    cardPopupImage.alt = "Photo of " + this._title;
    cardPopupWindow.classList.add("popup_open");
  }

  _handleClosePopup() {
    cardPopupWindow.classList.remove("popup_open");
  }
}

initialCards.forEach((data) => {
  const card = new Card(data, "#card__template");
  const cardElement = card.renderCard();

  document.querySelector(".elements__container").prepend(cardElement);
});
