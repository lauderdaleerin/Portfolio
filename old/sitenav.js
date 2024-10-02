`use strict`;

const siteNav = function () {
  const navBtn = document.querySelector(`.nav-arrow`);
  const navBox = document.querySelector(`.nav`);
  const closeArrow = document.querySelectorAll(`.close`);
  const openArrow = document.querySelectorAll(`.open`);
  const overlay = document.querySelector(`.overlay`);

  const navFunc = function () {
    if (navBox.classList.contains(`nav-close`)) {
      navBox.classList.remove(`nav-close`);
      closeArrow.forEach(a => a.classList.remove(`hidden`));
      openArrow.forEach(a => a.classList.add(`hidden`));
      overlay.classList.remove(`hidden`);
    } else {
      navBox.classList.add(`nav-close`);
      closeArrow.forEach(a => a.classList.add(`hidden`));
      openArrow.forEach(a => a.classList.remove(`hidden`));
      overlay.classList.add(`hidden`);
    }
  };

  navBox.addEventListener(`click`, navFunc);

  navBtn.addEventListener(`keydown`, function (e) {
    if (e.key === ` `) navFunc();
    if (e.key === `Enter`) navFunc();
  });
};
siteNav();
