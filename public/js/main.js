const hamburger = document.querySelector(".menu");
const navMenu = document.querySelector(".nav-items");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("rotate");
  navMenu.classList.toggle("my-active");
}
