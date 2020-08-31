const navMain = document.querySelector('.main-nav');
const navBtnOpen = document.querySelector('.button-burger');
const navBtnClose = document.querySelector('.button-cross');

navMain.classList.remove('main-nav--nojs');

if (navMain.classList.contains('main-nav--closed')) {
  navBtnClose.style.display = 'none';
};

navBtnOpen.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navBtnClose.style.display = 'block';
  }
});

navBtnClose.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--opened')) {
    navMain.classList.remove('main-nav--opened');
    navMain.classList.add('main-nav--closed');
    navBtnClose.style.display = 'none';
  }
})