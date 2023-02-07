"use strict";

// start variables
let UserName = document.getElementById("UserName");
UserName.textContent = `Hi ${localStorage.getItem("userName")}`;

let reviewNumber = document.querySelector(".reviewNumber");
let watchingNumber = document.querySelector(".watchingNumber");
let subscribeNumber = document.querySelector(".subscribeNumber");
const logOut = document.querySelector(".logout");
const burgerMenuBtn = document.querySelector(".burgerMenu");
let counter = setInterval(generateRandomNumber, 1500);
const toUp = this.document.querySelector(".to-up");
const loading = setTimeout(load, 4500);
const slide = setTimeout(slideUp, 2500);
// end variables

// start functions
function generateRandomNumber() {
  reviewNumber.textContent = Math.trunc(Math.random() * 5465) + 1 + "K";
  watchingNumber.textContent = Math.trunc(Math.random() * 7941) + 1 + "K";
  subscribeNumber.textContent = Math.trunc(Math.random() * 6481) + 1 + "K";
}

function load() {
  document.querySelector(".loadingPage").classList.remove("loadingPage-active");
}

function slideUp() {
  document.querySelector(".loadingPage").classList.add("loadingPage-slide");
  document.querySelector(".loadingImg").classList.add("d-none");
}

function showLinkGroup() {
  document.querySelector(".linkGroup").classList.toggle("flex");
  document.querySelector(".addlinkGroup").classList.toggle("flex");
}
// end functions

// start events
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

burgerMenuBtn.addEventListener("click", showLinkGroup);
// end events
