const HIDE_CLASSNAME = "hide";
const OPEN_CLASSNAME = "open";

const navLinks = document.querySelector("#header__nav");

const menuOpenLinks = document.querySelector("#header__menu__open");
const menuCloseLinks = document.querySelector("#header__menu__close");
const bodyLinks = document.querySelector("body");

function toggleMenu() {
  if (navLinks.classList.contains(OPEN_CLASSNAME)) {
    navLinks.classList.remove(OPEN_CLASSNAME);
    menuCloseLinks.classList.remove(OPEN_CLASSNAME);
    bodyLinks.classList.remove(OPEN_CLASSNAME);
    menuOpenLinks.classList.remove(OPEN_CLASSNAME);
    navLinks.classList.add(HIDE_CLASSNAME);
  } else {
    navLinks.classList.add(OPEN_CLASSNAME);
    menuCloseLinks.classList.add(OPEN_CLASSNAME);
    bodyLinks.classList.add(OPEN_CLASSNAME);
    menuOpenLinks.classList.add(OPEN_CLASSNAME);
    navLinks.classList.remove(HIDE_CLASSNAME);
  }
}
