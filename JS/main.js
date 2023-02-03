"use strict";
let UserName = document.getElementById("UserName");
UserName.textContent = `Hi ${localStorage.getItem("userName")}`;
