"use strict"

// Gamburger menu animation
const gamburgMenu = document.querySelector(".gamburgerMenu-wrapper");
const ganburgerMenuNavig = document.querySelector(".navigMenu");
const navigMenu = document.querySelector(".navigMenu");
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");
const fourth = document.querySelector(".fourth");

function displayMenu(event) {
	navigMenu.classList.toggle("hide-menu");
	navigMenu.classList.toggle("show-menu");
	first.classList.toggle("first-active");
	second.classList.toggle("second-active");
	third.classList.toggle("third-active");
	fourth.classList.toggle("fourth-active");
}

gamburgMenu.addEventListener("click", displayMenu);
ganburgerMenuNavig.addEventListener("click", displayMenu);

//---------------------------------------------------------------------------
//Page component animation
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const headContentWrapper = document.querySelector(".head-content-wrapper");
const aboutCompanyContainerContent = document.querySelector(".about-company-container-content");
const aboutCompanyContainerIllustration = document.querySelector(".about-company-container-illustration");
const achievsArr = document.querySelectorAll(".achiev");
const achiev = document.querySelector(".achievCenter");
const story = document.querySelector(".story-container");
const ourServicesContainerInfo = document.querySelector(".our-services-container-info");
const ourServicesContainerVideo = document.querySelector(".our-services-container-video");
const ourWorkContainerInfoActive = document.querySelector(".our-work-container-info");
const workImgList = document.querySelectorAll(".work-img");
const clienList = document.querySelectorAll(".client");
const testimonial = document.querySelector(".testimonial");
const clientPhoto = document.querySelector(".client-photo");
const needHelpContainer = document.querySelector(".need-help-container");
const socialMLlist = document.querySelectorAll(".socialML-container li");
const quickLinksLinks = document.querySelector(".quickLinks-container .links");
const quickLinksPhotos = document.querySelector(".quickLinks-container .photos");

let isScrolling = false;

window.addEventListener("scroll", throttleScroll, false);
document.addEventListener("DOMContentLoaded", scrolling, false);

function isPartiallyVisible(el) {
  let elementBoundary = el.getBoundingClientRect();

  let top = elementBoundary.top;
  let bottom = elementBoundary.bottom;
  let height = elementBoundary.height;

  return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}

function isFullyVisible(el) {
  let elementBoundary = el.getBoundingClientRect();

  let top = elementBoundary.top;
  let bottom = elementBoundary.bottom;

  return ((top >= 0) && (bottom <= window.innerHeight));
}

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
