"use strict"

// Gamburger menu animation
let gamburgMenu = document.querySelector(".gamburgerMenu-wrapper");
let headerigMenu = document.querySelector(".headerigMenu");
let first = document.querySelector(".first");
let second = document.querySelector(".second");
let third = document.querySelector(".third");
let fourth = document.querySelector(".fourth");

function displayMenu(event) {
	headerigMenu.classList.toggle("hide-menu");
	headerigMenu.classList.toggle("show-menu");
	first.classList.toggle("first-active");
	second.classList.toggle("second-active");
	third.classList.toggle("third-active");
	fourth.classList.toggle("fourth-active");
}

gamburgMenu.addEventListener("click", displayMenu);

//---------------------------------------------------------------------------
//Page component animation
let isScrolling = false;

window.addEventListener("scroll", throttleScroll, false);

//Defining the wrapper function of the page handler 'throttleScroll' 
//that launches the page scroll handler 'scrolling'. 
//using the window.requestAnimationFrame method, we set the handler 'scrolling' call 
//on the next frame of the animation. This means that the current event handler 
//will be called about 60 times per second, which is a valid value when working 
//with DOM structures of various kinds.
function throttleScroll(e) {
  if (isScrolling == false) {
    window.requestAnimationFrame(function() {
      scrolling(e);
      isScrolling = false;
    });
  }
  isScrolling = true;
}

document.addEventListener("DOMContentLoaded", scrolling, false);


let header = document.querySelector("header");
let nav = document.querySelector("nav");
let headContentWrapper = document.querySelector(".head-content-wrapper");
let aboutCompanyContainerContent = document.querySelector(".about-company-container-content");
let aboutCompanyContainerIllustration = document.querySelector(".about-company-container-illustration");

function scrolling(e) {
	if (isPartiallyVisible(header)) {
		header.classList.add("header-active");
	}
	if (isPartiallyVisible(nav)) {
		nav.classList.add("nav-active");
	}
	if (isPartiallyVisible(headContentWrapper)) {
		headContentWrapper.classList.add("head-content-wrapper-active");
	}
	if (isPartiallyVisible(aboutCompanyContainerContent)) {
		aboutCompanyContainerContent.classList.add("about-company-container-content-active");
	}
	if (isPartiallyVisible(aboutCompanyContainerIllustration)) {
		aboutCompanyContainerIllustration.classList.add("about-company-container-illustration-active");
	}




/*  if (isPartiallyVisible(firstBox)) {
    firstBox.classList.add("active");

    document.body.classList.add("colorOne");
    document.body.classList.remove("colorTwo");
  } else {
    document.body.classList.remove("colorOne");
    document.body.classList.remove("colorTwo");
  }

  if (isFullyVisible(secondBox)) {
    secondBox.classList.add("active");

    document.body.classList.add("colorTwo");
    document.body.classList.remove("colorOne");
  }

  for (var i = 0; i < listItems.length; i++) {
    var listItem = listItems[i];

    if (isPartiallyVisible(listItem)) {
      listItem.classList.add("active");
    } else {
      listItem.classList.remove("active");
    }
  }*/
}

function isPartiallyVisible(el) {
  var elementBoundary = el.getBoundingClientRect();

  var top = elementBoundary.top;
  var bottom = elementBoundary.bottom;
  var height = elementBoundary.height;

  return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}

function isFullyVisible(el) {
  var elementBoundary = el.getBoundingClientRect();

  var top = elementBoundary.top;
  var bottom = elementBoundary.bottom;

  return ((top >= 0) && (bottom <= window.innerHeight));
}
