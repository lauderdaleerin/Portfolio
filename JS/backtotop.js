`use strict`;
const btn = document.querySelector(`.return`);
const nav = document.getElementById(`NAV`);
const btmNav = nav.getBoundingClientRect().bottom + 100;

window.addEventListener('scroll', function () {
  const scrollPosition = window.scrollY;

  if (scrollPosition > btmNav) {
    btn.classList.remove(`hidden`);
  } else {
    btn.classList.add(`hidden`);
  }
});
