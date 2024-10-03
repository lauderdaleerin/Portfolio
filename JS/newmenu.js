const text = document.querySelectorAll(`.menu-text`);
const line = document.querySelectorAll(`.menu-item`);

text.forEach(function (text, i) {
  text.addEventListener(`mouseover`, function () {
    line[i].style.transition = `background-color .5s ease`;
    line[i].style.backgroundColor = `#a45fe6`;
  });
  text.addEventListener(`mouseout`, function () {
    line[i].style.backgroundColor = `#ffea30`;
  });
});

const mobileBtn = document.querySelector(`.hamburger`);
const mobileMenu = document.querySelector(`.mobile-menu`);
const menuItem = document.querySelectorAll(`.mm-item`);
const menuIcon = document.querySelector(`.menu-icon`);

mobileBtn.addEventListener(`click`, function () {
  if (mobileMenu.style.display === `none`) {
    menuIcon.src = `https://raw.githubusercontent.com/lauderdaleerin/Portfolio/4166b9cb91becac95a12af1fc40ba7621514c3f6/images/icons/x.svg`;

    mobileBtn.style.backgroundColor = `#00bdaa`;
    mobileBtn.style.boxShadow = `inset .25rem .25rem rgba(0, 0, 0, 0.35)`;
    mobileMenu.style.display = `flex`;
    menuItem.forEach(function (item) {
      item.style.height = `2.5em`;
    });
  } else {
    menuIcon.src = `https://raw.githubusercontent.com/lauderdaleerin/Portfolio/4166b9cb91becac95a12af1fc40ba7621514c3f6/images/icons/tridot.svg`;
    mobileBtn.style.backgroundColor = `#a1dd70`;
    mobileBtn.style.boxShadow = `0.25rem 0.25rem rgba(0, 0, 0, 0.35)`;
    mobileMenu.style.display = `none`;
    menuItem.forEach(function (item) {
      item.style.height = `0`;
    });
  }
});
