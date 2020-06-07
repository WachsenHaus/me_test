"use strict";

const homeEle = document.querySelector(".home__container");
const homeEleHeight = homeEle.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  let y = window.scrollY;
  homeEle.style.opacity = 1 - y / homeEleHeight;
});

//navbar를 투명하게만들고 움직일때 최상단에 위치하게함.
const navbar = document.getElementById("navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  let y = window.scrollY;
  if (y > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

//navbar 선택시 해당 element로 이동
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", () => {
  const target = event.target;
  const link = target.dataset.link;
  if (link === null) {
    return;
  }
  scrollIntoView(link);
});

//컨택트버튼클릭시 해당 요소로 이동
const contactBtn = document.querySelector(".home__contact");
contactBtn.addEventListener("click", () => {
  scrollIntoView("#contact");
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
