'use strict';
const hoverView = function () {
  const numContainer = document.querySelectorAll(`.dots`);

  const nums = document.querySelectorAll(`.hadot`);
  const descContainer = document.querySelector(`.descs`);
  const descs = document.querySelectorAll(`.desc`);

  const numHover = function (e, status) {
    const num = e.target.dataset.tab;
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

  numContainer.forEach(n =>
    n.addEventListener(`mouseover`, function (e) {
      numHover(e, `remove`);
    })
  );

  numContainer.forEach(n =>
    n.addEventListener(`mouseout`, function (e) {
      numHover(e, `add`);
    })
  );

  numContainer.forEach(n =>
    n.addEventListener(`touchstart`, function (e) {
      numHover(e, `remove`);
    })
  );

  numContainer.forEach(n =>
    n.addEventListener(`touchend`, function (e) {
      numHover(e, `add`);
    })
  );
};
hoverView();
