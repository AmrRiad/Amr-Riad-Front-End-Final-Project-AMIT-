"use strict";

console.log();
let UserName = document.getElementById("UserName");
UserName.textContent = `Hi ${localStorage.getItem("userName")}`;

let reviewNumber = document.querySelector(".reviewNumber");
let watchingNumber = document.querySelector(".watchingNumber");
let subscribeNumber = document.querySelector(".subscribeNumber");
const logOut = document.querySelector(".logout");

function generateRandomNumber() {
  reviewNumber.textContent = Math.trunc(Math.random() * 5465) + 1 + "K";
  watchingNumber.textContent = Math.trunc(Math.random() * 7941) + 1 + "K";
  subscribeNumber.textContent = Math.trunc(Math.random() * 6481) + 1 + "K";
}

let counter = setInterval(generateRandomNumber, 1500);
let toUp = this.document.querySelector(".to-up");

window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navBar");
  console.log(navbar);
  navbar.classList.toggle("fixedNav", window.scrollY > 300);
  toUp.classList.toggle("to-up-active", window.scrollY > 100);
});

logOut.addEventListener("click", function () {
  localStorage.clear();
});

toUp.addEventListener("click", function () {
  document.documentElement.scrollTop = 0;
});

const loading = setTimeout(load, 5000);

function load() {
  document.querySelector(".loadingPage").classList.remove("loadingPage-active");
}

const slide = setTimeout(slideUp, 3000);
function slideUp() {
  document.querySelector(".loadingPage").classList.add("loadingPage-slide");
  document.querySelector(".loadingImg").classList.add("d-none");
}
