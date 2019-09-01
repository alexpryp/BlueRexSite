"use strict";

var gamburgMenu = document.querySelector(".gamburgerMenu-wrapper");
var navigMenu = document.querySelector(".navigMenu");
var first = document.querySelector(".first");
var second = document.querySelector(".second");
var third = document.querySelector(".third");
var fourth = document.querySelector(".fourth");

function displayMenu(event) {
  navigMenu.classList.toggle("hide-menu");
  navigMenu.classList.toggle("show-menu");
  first.classList.toggle("first-active");
  second.classList.toggle("second-active");
  third.classList.toggle("third-active");
  fourth.classList.toggle("fourth-active");
}

gamburgMenu.addEventListener("click", displayMenu);