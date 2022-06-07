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

const cardWrap = document.querySelector(".elements__container");

const cardTemplate = document
  .querySelector("#card__template")
  .content.querySelector(".elements__item");

class Card {
  constructor(data, cardSelector) {
    this._title = data.title;
    this._image = data.image;
    this._cardSelector = cardSelector;
    this._isLiked = false;
  }

  _like() {
      this._isLiked = !this._isLiked;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  _setEventListeners() {
      
  }

  renderCard() {
    this._element = this._getTemplate();
    
    this._element.querySelector(
      ".card__image"
    ).style.backgroundImage = `url('${data.link}')`;
    this._element.querySelector(".card__title") = data.name;
    this._element.querySelector(".card__like-button") = deleteButton;

    return this._element;
  }
}

initialCards.forEach((data) => {
  const card = new Card(data, cardTemplate);
  const cardElement = card.renderCard();

  wrapper.prepend(cardElement);
});

