`use strict`;
const slides = document.querySelectorAll(`.pslide`);
const btnLeft = document.querySelector(`.slider-btn-left`);
const btnRight = document.querySelector(`.slider-btn-right`);

//Set order for default position
slides.forEach((slide, i) => {
  slide.style.order = i;
  if (Number(slide.style.order) !== 1) {
    slide.classList.add(`inactive`);
  } else {
    slide.classList.remove(`inactive`);
  }
});

//Move order of slides when buttons are pressed
btnLeft.addEventListener(`click`, function () {
  slides.forEach(slide => {
    let order = Number(slide.style.order);
    if (order === 0) {
      order = slides.length - 1;
    } else {
      order = order - 1;
    }
    slide.style.order = order;
    if (Number(slide.style.order) !== 1) {
      slide.classList.add(`inactive`);
    } else {
      slide.classList.remove(`inactive`);
    }
  });
});

btnRight.addEventListener(`click`, function () {
  slides.forEach(slide => {
    let order = Number(slide.style.order);
    if (order === slides.length - 1) {
      order = 0;
    } else {
      order = order + 1;
    }
    slide.style.order = order;
    if (Number(slide.style.order) !== 1) {
      slide.classList.add(`inactive`);
    } else {
      slide.classList.remove(`inactive`);
    }
  });
});
