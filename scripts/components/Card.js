import { closePopup, openPopup } from "../utils/utils.js";
import {
  cardPopupCaption,
  cardPopupWindow,
  cardPopupImage,
  cardPopupClose,
} from "../utils/constants.js";

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
    cardPopupImage.addEventListener("click", this._getCardPopup);

    const likeButton = this._element.querySelector(".card__like-button");
    likeButton.addEventListener("click", this._toggleLikeButton);

    const deleteButton = this._element.querySelector(".card__delete-button");
    deleteButton.addEventListener("click", this._handleDeleteCard);

    cardPopupClose.addEventListener("click", this._handleClosePopup);
  }

  _toggleLikeButton = () => {
    this._element
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  };

  _getCardPopup = () => {
    cardPopupCaption.textContent = this._name;
    cardPopupImage.src = this._link;
    cardPopupImage.alt = "Photo of " + this._name;

    openPopup(cardPopupWindow);
  };

  _handleClosePopup = () => {
    closePopup(cardPopupWindow);
  };

  _handleDeleteCard = () => {
    this._element.remove();
  };

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    const cardImage = this._element.querySelector(".card__image");
    const cardTitle = this._element.querySelector(".card__title");

    cardImage.style.backgroundImage = `url('${this._link}')`;
    cardTitle.textContent = this._name;

    return this._element;
  }
}

export default Card;
