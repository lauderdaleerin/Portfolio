const skillItem = document.querySelectorAll(`.bubble`);
const bubbles = document.querySelectorAll(`.p-circle`);
const label = document.querySelectorAll(`.hidden-txt`);

skillItem.forEach(function (item, i) {
  item.addEventListener(`mouseover`, function () {
    label[i].style.display = `flex`;
    label[i].style.transform = `translateX(0%)`;
    bubbles[i].style.boxShadow = `inset 0.25rem 0.25rem rgba(0, 0, 0, 0.35)`;
  });
  item.addEventListener(`mouseout`, function () {
    label[i].style.display = `none`;
    label[i].style.transform = `translateX(-10%)`;
    bubbles[i].style.boxShadow = `0.25rem 0.25rem rgba(0, 0, 0, 0.35)`;
  });
});
