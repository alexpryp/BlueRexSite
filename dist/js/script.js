"use strict"; // Gamburger menu animation

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

gamburgMenu.addEventListener("click", displayMenu); //---------------------------------------------------------------------------
//Page component animation

var header = document.querySelector("header");
var nav = document.querySelector("nav");
var headContentWrapper = document.querySelector(".head-content-wrapper");
var aboutCompanyContainerContent = document.querySelector(".about-company-container-content");
var aboutCompanyContainerIllustration = document.querySelector(".about-company-container-illustration");
var achievsArr = document.querySelectorAll(".achiev");
var achiev = document.querySelector(".achievCenter");
var story = document.querySelector(".story-container");
var ourServicesContainerInfo = document.querySelector(".our-services-container-info");
var ourServicesContainerVideo = document.querySelector(".our-services-container-video");
var ourWorkContainerInfoActive = document.querySelector(".our-work-container-info");
var workImgList = document.querySelectorAll(".work-img");
var clienList = document.querySelectorAll(".client");
var testimonial = document.querySelector(".testimonial");
var clientPhoto = document.querySelector(".client-photo");
var needHelpContainer = document.querySelector(".need-help-container");
var socialMLlist = document.querySelectorAll(".socialML-container li");
var quickLinksLinks = document.querySelector(".quickLinks-container .links");
var quickLinksPhotos = document.querySelector(".quickLinks-container .photos");
var isScrolling = false;

function isPartiallyVisible(el) {
  var elementBoundary = el.getBoundingClientRect();
  var top = elementBoundary.top;
  var bottom = elementBoundary.bottom;
  var height = elementBoundary.height;
  return top + height >= 0 && height + window.innerHeight >= bottom;
}

function isFullyVisible(el) {
  var elementBoundary = el.getBoundingClientRect();
  var top = elementBoundary.top;
  var bottom = elementBoundary.bottom;
  return top >= 0 && bottom <= window.innerHeight;
} //Defining the wrapper function of the page handler 'throttleScroll' 
//that launches the page scroll handler 'scrolling'. 
//using the window.requestAnimationFrame method, we set the handler 'scrolling' call 
//on the next frame of the animation. This means that the current event handler 
//will be called about 60 times per second, which is a valid value when working 
//with DOM structures of various kinds.


function throttleScroll(e) {
  if (isScrolling == false) {
    window.requestAnimationFrame(function () {
      scrolling(e);
      isScrolling = false;
    });
  }

  isScrolling = true;
}

window.addEventListener("scroll", throttleScroll, false);
document.addEventListener("DOMContentLoaded", scrolling, false);

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

  workImgList.forEach(function (element) {
    if (isPartiallyVisible(element)) {
      element.classList.add("work-img-active");
    }
  });
  clienList.forEach(function (element) {
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

  socialMLlist.forEach(function (element) {
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