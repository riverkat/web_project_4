function handleEscEvent(evt) {
  if (evt.key === "Escape") {
    const activePopup = document.querySelector(".popup_open");
    closePopup(activePopup);
  }
}

function closePopupOnRemoteClick(evt) {
  if (
    evt.target.classList.contains("popup") ||
    evt.target.classList.contains("popup__close-button")
  ) {
    const activePopup = document.querySelector(".popup_open");
    closePopup(activePopup);
  }
}

function openPopup(popupWindow) {
  popupWindow.classList.add("popup_open");
  document.addEventListener("keydown", handleEscEvent);
  document.addEventListener("mousedown", closePopupOnRemoteClick);
}

function closePopup(popupWindow) {
  popupWindow.classList.remove("popup_open");
  document.removeEventListener("keydown", handleEscEvent);
  document.removeEventListener("mousedown", closePopupOnRemoteClick);
}

export { handleEscEvent, closePopupOnRemoteClick, closePopup, openPopup };
