`use strict`;
const slides = document.querySelectorAll(`.pslide`);
const btnLeft = document.querySelector(`.slider-btn-left`);
const btnRight = document.querySelector(`.slider-btn-right`);

//set order & transform
slides.forEach((slide, i) => {
  let order = i - 1;
  slide.style.transform = `translateX(${120 * order}%)`;
  if (order !== 0) {
    slide.classList.add(`inactive`);
  }
  btnLeft.addEventListener(`click`, function (e) {
    e.preventDefault;
    if (order === slides.length - 2) {
      order = -1;
    } else {
      order++;
    }
    slide.style.transform = `translateX(${120 * order}%)`;
    if (order !== 0) {
      slide.classList.add(`inactive`);
    } else {
      slide.classList.remove(`inactive`);
    }
  });
  btnRight.addEventListener(`click`, function (e) {
    e.preventDefault;
    if (order === -1) {
      order = 1;
    } else {
      order--;
    }
    slide.style.transform = `translateX(${120 * order}%)`;
    if (order !== 0) {
      slide.classList.add(`inactive`);
    } else {
      slide.classList.remove(`inactive`);
    }
  });
});
