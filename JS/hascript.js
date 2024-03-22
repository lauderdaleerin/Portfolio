'use strict';
const numContainer = document.querySelector(`.nums`);
const nums = document.querySelectorAll(`.num`);
const descContainer = document.querySelector(`.descs`);
const descs = document.querySelectorAll(`.desc`);

const numHover = function (e, status) {
  const num = e.target.innerText;
  descs.forEach(d => {
    if (d.dataset.tab !== `${num}`) {
      return;
    } else if (status === `add`) {
      d.classList.add(`hidden`);
    } else {
      d.classList.remove(`hidden`);
    }
  });
};

numContainer.addEventListener(`mouseover`, function (e) {
  numHover(e, `remove`);
  e.target.style.transform = `translateY(-5px)`;
});

numContainer.addEventListener(`mouseout`, function (e) {
  numHover(e, `add`);
  e.target.style.transform = `translateY(0px)`;
});

numContainer.addEventListener(`touchstart`, function (e) {
  numHover(e, `remove`);
  e.target.style.transform = `translateY(-5px)`;
});
numContainer.addEventListener(`touchend`, function (e) {
  numHover(e, `add`);
  e.target.style.transform = `translateY(0px)`;
});
