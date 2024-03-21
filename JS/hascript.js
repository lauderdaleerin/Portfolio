'use strict';
const numContainer = document.querySelector(`.nums`);
const nums = document.querySelectorAll(`.num`);
const descContainer = document.querySelector(`.descs`);
const descs = document.querySelectorAll(`.desc`);

//add hover event on each num element
numContainer.addEventListener(`click`, function (e) {
  const num = e.target.innerText;
  descs.forEach(d => {
    if (d.dataset.tab !== `${num}`) {
      return;
    } else {
      d.classList.toggle(`hidden`);
    }
  });
});

//find num value

//get rid of hidden class on matching dataset valued desc

//rehide desc on mouseout
