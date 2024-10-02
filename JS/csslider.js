`use strict`;

const csslider = function () {
  const btnRight = document.querySelector(`.slider-btn-right`);
  const btnLeft = document.querySelector(`.slider-btn-left`);
  const slides = document.querySelectorAll(`.cs-slide`);
  const thumbnails = document.querySelectorAll(`.slider-thumb`);

  let curSlide = 0;
  const maxSlide = slides.length - 1;

  thumbnails.forEach((thumb, i) => {
    thumb.classList.add(`border-y`);
    thumb.setAttribute(`data-set`, `${i}`);
  });

  const slideFunc = function (slide) {
    slides.forEach((s, i) => {
      s.style.order = `${i - slide}`;
      if (s.style.order === `0`) {
        s.classList.remove(`hidden`);
        thumbnails[i].classList.add(`border-p`);
      } else {
        s.classList.add(`hidden`);
        thumbnails[i].classList.remove(`border-p`);
      }
    });
  };
  slideFunc(curSlide);

  btnRight.addEventListener(`click`, function () {
    if (curSlide === maxSlide) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    slideFunc(curSlide);
  });
  btnLeft.addEventListener(`click`, function () {
    if (curSlide === 0) {
      curSlide = maxSlide;
    } else {
      curSlide--;
    }
    slideFunc(curSlide);
  });

  thumbnails.forEach(thumb => {
    thumb.addEventListener(`click`, function () {
      curSlide = thumb.dataset.set;
      slideFunc(curSlide);
    });
  });
};
csslider();
