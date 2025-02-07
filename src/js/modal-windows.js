const burgerButtons = document.querySelectorAll(".btn-burger");
const chatButtons = document.querySelectorAll(".btn-chat");
const callButtons = document.querySelectorAll(".btn-call");
const closeButtons = document.querySelectorAll(".btn-close");
const modalBurgerMenu = document.querySelector(".burger-menu");
const modalFeedback = document.querySelector(".modal-feedback");
const modalOrderCall = document.querySelector(".modal-order-call");
const modalState = document.querySelector(".body__modal-state");

for (let burgerButton of burgerButtons) {
  burgerButton.addEventListener("click", () => {
    modalBurgerMenu.classList.toggle("burger-menu--open");
    modalState.classList.add("body__modal-state--visible");
  });
}

for (let chatButton of chatButtons) {
  chatButton.addEventListener("click", () => {
    modalFeedback.classList.toggle("modal-feedback--open");
    modalState.classList.add("body__modal-state--visible");
  });
}

for (let callButton of callButtons) {
  callButton.addEventListener("click", () => {
    modalOrderCall.classList.toggle("modal-order-call--open");
    modalState.classList.add("body__modal-state--visible");
  });
}

for (let closeButton of closeButtons) {
  closeButton.addEventListener("click", () => {
    modalBurgerMenu.classList.remove("burger-menu--open");
    modalFeedback.classList.remove("modal-feedback--open");
    modalOrderCall.classList.remove("modal-order-call--open");
    if (!modalState.classList.contains("burger-menu--open")) {
      modalState.classList.remove("body__modal-state--visible");
    }
  });
}

  modalState.addEventListener("click", () => {
  modalBurgerMenu.classList.remove("burger-menu--open");
  modalFeedback.classList.remove("modal-feedback--open");
  modalOrderCall.classList.remove("modal-order-call--open");
  modalState.classList.remove("body__modal-state--visible");
});
