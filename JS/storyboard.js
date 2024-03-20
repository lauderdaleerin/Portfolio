`use strict`;

const storyboard = document.querySelector(`.storyboard`);
const slides = document.querySelectorAll(`.slide`);
const btnLeft = document.querySelector(`.slider-btn-left`);
const btnRight = document.querySelector(`.slider-btn-right`);
const dots = document.querySelector(`.dots`);

let curSlide = 0;
const maxSlides = slides.length - 1;

const createDots = function () {
  slides.forEach((_, i) => {
    dots.insertAdjacentHTML(
      `beforeend`,
      `<button class="dots-dot" data-slide="${i}"></button>`
    );
    console.log(`dot`);
  });
};
createDots();

const slidesFunc = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

const nextSlide = function () {
  if (curSlide === maxSlides) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  slidesFunc(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlides;
  } else {
    curSlide--;
  }
  slidesFunc(curSlide);
};

btnRight.addEventListener(`click`, nextSlide);
btnLeft.addEventListener(`click`, prevSlide);
document.addEventListener(`keydown`, function (e) {
  if (e.key === `ArrowLeft`) prevSlide();
  if (e.key === `ArrowRight`) nextSlide();
});
