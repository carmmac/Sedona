const navMain = document.querySelector(".main-nav");
const navBtnOpen = document.querySelector(".button-burger");
const navBtnClose = document.querySelector(".button-cross");

navMain.classList.remove("main-nav--nojs");

navBtnOpen.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
    navBtnOpen.classList.add("visually-hidden");
  }
});

navBtnClose.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--opened")) {
    navMain.classList.remove("main-nav--opened");
    navMain.classList.add("main-nav--closed");
    navBtnOpen.classList.remove("visually-hidden");
  }
});
