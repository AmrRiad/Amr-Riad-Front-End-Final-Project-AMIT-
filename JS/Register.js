"use strict";
// start variables
let signUpBtn = document.getElementById("signUpBtn");
let userNameAlert = document.getElementById("userNameAlert");
let emailAlert = document.getElementById("emailAlert");
let passAlert = document.getElementById("passAlert");
let rePassAlert = document.getElementById("repassAlert");
let passMatchAlert = document.getElementById("passMatchAlert");
let allDataError = document.getElementById("allData");
let users;
// end variables

//start condition states
if (localStorage.getItem("allUsers") == null) {
  users = [];
} else {
  users = JSON.parse(localStorage.getItem("allUsers"));
}
//end condition states

// start functions
function createNewAccount() {
  let userName = document.getElementById("userName").value;
  let userEmail = document.getElementById("userEmail").value;
  let userPassword = document.getElementById("userPassword").value;
  let rePassword = document.getElementById("rePassword").value;

  if (
    userName !== "" &&
    userEmail !== "" &&
    userPassword !== "" &&
    userPassword === rePassword
  ) {
    let user = {
      userName: userName,
      userEmail: userEmail,
      userPassword: userPassword,
    };
    users.push(user);

    localStorage.setItem("allUsers", JSON.stringify(users));
    location.href = "login.html";
  } else if (
    userName !== "" &&
    userEmail !== "" &&
    userPassword !== "" &&
    userPassword !== rePassword
  ) {
    passMatchAlert.classList.remove("d-none");
    userNameAlert.classList.add("d-none");
    emailAlert.classList.add("d-none");
    allDataError.classList.add("d-none");
  } else if (
    userName === "" &&
    userEmail !== "" &&
    userPassword !== "" &&
    userPassword !== rePassword
  ) {
    userNameAlert.classList.remove("d-none");
    passMatchAlert.classList.remove("d-none");
    emailAlert.classList.add("d-none");
    allDataError.classList.add("d-none");
  } else if (
    userName !== "" &&
    userEmail === "" &&
    userPassword !== "" &&
    userPassword !== rePassword
  ) {
    emailAlert.classList.remove("d-none");
    passMatchAlert.classList.remove("d-none");
    userNameAlert.classList.add("d-none");
    allDataError.classList.add("d-none");
  } else if (
    userName === "" &&
    userEmail === "" &&
    userPassword !== "" &&
    userPassword === rePassword
  ) {
    userNameAlert.classList.remove("d-none");
    emailAlert.classList.remove("d-none");
    passMatchAlert.classList.add("d-none");
    allDataError.classList.add("d-none");
  } else if (
    userName === "" &&
    userEmail === "" &&
    userPassword === "" &&
    rePassword === ""
  ) {
    allDataError.classList.remove("d-none");
  } else if (userName === "" && userEmail !== "" && userPassword !== "") {
    userNameAlert.classList.remove("d-none");
    allDataError.classList.add("d-none");
  } else if (userName !== "" && userEmail === "" && userPassword !== "") {
    emailAlert.classList.remove("d-none");
    allDataError.classList.add("d-none");
  } else if (userName !== "" && userEmail !== "" && userPassword === "") {
    passAlert.classList.remove("d-none");
    rePassAlert.classList.remove("d-none");
    allDataError.classList.add("d-none");
  } else if (userName !== "" && userEmail === "" && userPassword === "") {
    passAlert.classList.remove("d-none");
    rePassAlert.classList.remove("d-none");
    emailAlert.classList.remove("d-none");
    allDataError.classList.add("d-none");
  } else if (userName === "" && userEmail !== "" && userPassword === "") {
    passAlert.classList.remove("d-none");
    rePassAlert.classList.remove("d-none");
    userNameAlert.classList.remove("d-none");
    allDataError.classList.add("d-none");
  }
}
// end functions

// start events
signUpBtn.addEventListener("click", createNewAccount);
// end events
