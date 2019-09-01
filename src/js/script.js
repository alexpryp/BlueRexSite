"use strict"

let gamburgMenu = document.querySelector(".gamburgerMenu-wrapper");
let navigMenu = document.querySelector(".navigMenu");
let first = document.querySelector(".first");
let second = document.querySelector(".second");
let third = document.querySelector(".third");
let fourth = document.querySelector(".fourth");

function displayMenu(event) {
	navigMenu.classList.toggle("hide-menu");
	navigMenu.classList.toggle("show-menu");
	first.classList.toggle("first-active");
	second.classList.toggle("second-active");
	third.classList.toggle("third-active");
	fourth.classList.toggle("fourth-active");
}

gamburgMenu.addEventListener("click", displayMenu);
