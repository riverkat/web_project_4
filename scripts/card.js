import {
  handleEscEvent,
  closePopupOnRemoteClick,
  closePopup,
  openPopup,
} from "./utils.js";

//Constants
const cardPopupWindow = document.querySelector(".card-popup");
const cardPopupImage = document.querySelector(".card-popup__image");
const cardPopupCaption = document.querySelector(".card-popup__subtitle");
const cardPopupClose = document.querySelector(".card-popup__close-button");

class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;

    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  _setEventListeners() {
    const cardPopupImage = this._element.querySelector(".card__image");
    cardPopupImage.addEventListener("click", () => {
      this._getCardPopup();
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

  _getCardPopup() {
    cardPopupCaption.textContent = this._name;
    cardPopupImage.src = this._link;
    cardPopupImage.alt = "Photo of " + this._name;

    openPopup(cardPopupWindow);
  }

  _handleClosePopup() {
    closePopup(cardPopupWindow);
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector(
      ".card__image"
    ).style.backgroundImage = `url('${this._link}')`;
    this._element.querySelector(".card__title").textContent = this._name;

    return this._element;
  }
}

export default Card;
