"use strict"

// Gamburger menu animation
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
let achievsArr = document.querySelectorAll(".achiev");
let achiev = document.querySelector(".achievCenter");
let story = document.querySelector(".story-container");
let ourServicesContainerInfo = document.querySelector(".our-services-container-info");
let ourServicesContainerVideo = document.querySelector(".our-services-container-video");
let ourWorkContainerInfoActive = document.querySelector(".our-work-container-info");
let workImgList = document.querySelectorAll(".work-img");
let clienList = document.querySelectorAll(".client");
let testimonial = document.querySelector(".testimonial");
let clientPhoto = document.querySelector(".client-photo");
let needHelpContainer = document.querySelector(".need-help-container");
let socialMLlist = document.querySelectorAll(".socialML-container li");
let quickLinksLinks = document.querySelector(".quickLinks-container .links");
let quickLinksPhotos = document.querySelector(".quickLinks-container .photos");

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
	if (isPartiallyVisible(achievsArr[0]) || isPartiallyVisible(achievsArr[1]) || isPartiallyVisible(achiev)) {
		achievsArr[0].classList.add("achiev-active");
		achievsArr[1].classList.add("achiev-active");
		achiev.classList.add("achiev-active");
	}
	if (isPartiallyVisible(story)) {
		story.classList.add("story-container-active");
	}
	if (isPartiallyVisible(ourServicesContainerInfo)) {
		ourServicesContainerInfo.classList.add("our-services-container-info-active");
	}
	if (isPartiallyVisible(ourServicesContainerVideo)) {
		ourServicesContainerVideo.classList.add("our-services-container-video-active");
	}
	if (isPartiallyVisible(ourWorkContainerInfoActive)) {
		ourWorkContainerInfoActive.classList.add("our-work-container-info-active");
	}
	workImgList.forEach(function(element) {
		if (isPartiallyVisible(element)) {
			element.classList.add("work-img-active");
		}
	});
	clienList.forEach(function(element) {
		if (isPartiallyVisible(element)) {
			element.classList.add("client-active");
		}
	});
	if (isPartiallyVisible(testimonial)) {
		testimonial.classList.add("testimonial-active");
	}
	if (isPartiallyVisible(clientPhoto)) {
		clientPhoto.classList.add("client-photo-active");
	}
	if (isPartiallyVisible(needHelpContainer)) {
		needHelpContainer.classList.add("need-help-container-active");
	}
	socialMLlist.forEach(function(element) {
		if (isPartiallyVisible(element)) {
			element.classList.add("socialML-active");
		}
	});
	if (isPartiallyVisible(quickLinksLinks)) {
		quickLinksLinks.classList.add("links-active");
	}
	if (isPartiallyVisible(quickLinksPhotos)) {
		quickLinksPhotos.classList.add("photos-active");
	}
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
