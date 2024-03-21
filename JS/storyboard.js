`use strict`;

const storyboard = document.querySelector(`.storyboard`);
const slides = document.querySelectorAll(`.slide`);
const btnLeft = document.querySelector(`.slider-btn-left`);
const btnRight = document.querySelector(`.slider-btn-right`);
const dots = document.querySelector(`.dots`);

let curSlide = 0;
const maxSlides = slides.length - 1;

// const slideHeight = function () {
//   let maxH = 0;
//   slides.forEach(s => {
//     if (s.height >= maxH) {
//       maxH = s.height;
//     } else return;
//   });
//   storyboard.style.height = `${maxH}px`;
// };

const createDots = function () {
  slides.forEach((_, i) => {
    dots.insertAdjacentHTML(
      `beforeend`,
      `<button class="dots-dot" data-slide="${i}"></button>`
    );
  });
};

const activeDot = function (slide) {
  document
    .querySelectorAll(`.dots-dot`)
    .forEach(dot => dot.classList.remove(`dots-dot-active`));

  document
    .querySelector(`.dots-dot[data-slide="${slide}"]`)
    .classList.add(`dots-dot-active`);
};

const slidesFunc = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

const init = function () {
  createDots();
  slidesFunc(curSlide);
  activeDot(curSlide);
  // slideHeight();
};

init();

const nextSlide = function () {
  if (curSlide === maxSlides) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  slidesFunc(curSlide);
  activeDot(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlides;
  } else {
    curSlide--;
  }
  slidesFunc(curSlide);
  activeDot(curSlide);
};

btnRight.addEventListener(`click`, nextSlide);
btnLeft.addEventListener(`click`, prevSlide);
document.addEventListener(`keydown`, function (e) {
  if (e.key === `ArrowLeft`) prevSlide();
  if (e.key === `ArrowRight`) nextSlide();
});

dots.addEventListener(`click`, function (e) {
  if (e.target.classList.contains(`dots-dot`)) {
    const { slide } = e.target.dataset;
    slidesFunc(slide);
    activeDot(slide);
  }
});
