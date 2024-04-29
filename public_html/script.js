"use strict";

// scroll to top button
const scrollToTop = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 700) {
    scrollToTop.classList.add("show");
  } else {
    scrollToTop.classList.remove("show");
  }
});

scrollToTop.addEventListener("click", function (event) {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// mobile nav

// hamburger
function hamburger() {
  //const burger = document.querySelector('.hamburger hamburger--collapse');
  const burger = document.querySelector(".hamburger");
  const navoverlay = document.querySelector(".navbar");
  const nav = document.getElementById("navigation");

  //toggle Nav-Bar
  burger.addEventListener("click", () => {
    burger.classList.toggle("is-active");
    nav.classList.toggle("is-active");
    navoverlay.classList.toggle("navbar-mobile");
  });
}

hamburger();

// timeline animation
const timeline = document.getElementById("timeline");
const boxes = [...timeline.querySelectorAll(".timeline-box")];
let points = [];

window.addEventListener("resize", () => {
  points = calculateBoxOffsets();
});

function calculateBoxOffsets() {
  let points = [];
  boxes.forEach((box) => {
    let offset = box.getBoundingClientRect().top;
    offset = offset - screen.height / 2;
    points.push(offset);
  });
  return points;
}

points = calculateBoxOffsets();

window.addEventListener("scroll", () => {
  points.forEach((point, index) => {
    if (point < window.pageYOffset) {
      boxes[index].classList.add("animate");
    }
  });
});
