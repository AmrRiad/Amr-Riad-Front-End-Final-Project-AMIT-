"use strict";
// start variables
let signInBtn = document.getElementById("signIn");
let allUsers = JSON.parse(localStorage.getItem("allUsers"));
let userNameAlert = document.getElementById("userNameAlert");
let userInvalid = document.getElementById("userInvalid");
let passAlert = document.getElementById("passAlert");
let incorrectPass = document.getElementById("incorrectPass");
let allDataError = document.getElementById("allData");
// end variables

// start functions
function login() {
  let userName = document.getElementById("userName").value;
  let userPassword = document.getElementById("userPassword").value;

  for (let i = 0; i < allUsers.length; i++) {
    if (userName === "" && userPassword === "") {
      allDataError.classList.remove("d-none");
    } else if (allUsers[i].userName !== userName) {
      userInvalid.classList.remove("d-none");
      allDataError.classList.add("d-none");
    } else if (
      allUsers[i].userName === userName &&
      allUsers[i].userPassword !== userPassword
    ) {
      incorrectPass.classList.remove("d-none");
      userInvalid.classList.add("d-none");
      allDataError.classList.add("d-none");
    } else if (
      allUsers[i].userName === userName &&
      allUsers[i].userPassword === userPassword
    ) {
      localStorage.setItem("userName", userName);
      incorrectPass.classList.add("d-none");
      userInvalid.classList.add("d-none");
      allDataError.classList.add("d-none");
      location.href = "main.html";
    }
  }
}
// end functions

// start events
signInBtn.addEventListener("click", login);
// end events
