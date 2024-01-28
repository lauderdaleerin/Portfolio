`use strict`;
const navBoxCloseEl = document.querySelector(`.nav-box`);
const navBoxOpenEl = document.querySelector(`.nav-box-open`);
const openButton = document.querySelector(`.nav-button-open`);
const closeButton = document.querySelector(`.nav-button-close`);
const overlay = document.querySelector(`.overlay`);

//Open navigation
const openNav = function () {
  navBoxOpenEl.classList.remove(`hidden`);
  overlay.classList.remove(`hidden`);
};

navBoxCloseEl.addEventListener(`click`, openNav);

//Close navigation
const closeNav = function () {
  navBoxOpenEl.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
};
closeButton.addEventListener(`click`, closeNav);
