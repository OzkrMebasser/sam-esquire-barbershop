'use strict';
// const languages = [
//   "We speak English", 
//   "Nous parlons Français", 
//   "نحن نتحدث العربية",
//   "نتكلم تمازيغت"

// ];

// let i = 0;

// setInterval(function() {

//   document.getElementById("language").innerText = languages[i];
  
//   setTimeout(function() {
//     document.getElementById("language").innerText = "";
//   }, 2000);

//   i++;
  
//   if(i >= languages.length) {
//     i = 0; 
//   }

// }, 3000);

// const languages = [
//   "We speak English",
//   "Nous parlons Français", 
//   "نحن نتحدث العربية",
//   "German"  
// ];

// const track = document.querySelector(".track");

// languages.forEach(lang => {
//   let text = document.createElement("div");
//   text.innerText = lang;
  
//   track.appendChild(text);
// });
const track = document.querySelector(".track");
const content = document.querySelector(".content");

track.addEventListener("animationiteration", () => {
  track.style.transition = "none";
  track.style.transform = `translateX(${content.clientWidth}px)`;
});


const phrases = [
  "Sharp cuts, sharp service.",
  "Where every cut is a work of art!",
  "Trimming traditions, modern styles!",
  "Masterful cuts, lasting impressions!"
];

let phraseIndex = 0;
let lettersIndex = 0;
let adding = true;

function type() {
  const phrase = phrases[phraseIndex];

  if (adding) {
    document.getElementById("typing").innerHTML += phrase.charAt(lettersIndex);
    lettersIndex++;

    if (lettersIndex === phrase.length) {
      adding = false;
      setTimeout(type, 1200);
    } else {
      setTimeout(type, 120);
    }
  } else {
    lettersIndex--;
    document.getElementById("typing").innerHTML = phrase.slice(0, lettersIndex);

    if (lettersIndex === 0) {
      adding = true;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(type, 1200);
    } else {
      setTimeout(type, 120);
    }
  }
}

type();

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const menuIcon = navToggler.querySelector("ion-icon");

// const toggleNavbar = () => navbar.classList.toggle("active");

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = () => navbar.classList.remove("active");

addEventOnElem(navLinks, "click", closeNavbar);



function toggleNavbar() {
  navbar.classList.toggle("active");
  
  // Toggle icon
  navbar.classList.contains("active") 
  ? menuIcon.name = "cut-outline" 
  : menuIcon.name = "menu-outline"; 
  // if(navbar.classList.contains("active")) {
  //   menuIcon.name = "cut-outline";
  // } else {
  //   menuIcon.name = "menu-outline";
  // }
}

function toggleNavbar() {
  navbar.classList.toggle("active");
  
  // Toggle icon and rotation
  if (navbar.classList.contains("active")) {
    menuIcon.name = "cut-outline";
    menuIcon.classList.add("rotate-360");
  } else {
    menuIcon.name = "menu-outline";
    menuIcon.classList.remove("rotate-360");
  }
}

/**
 * header & back top btn, and book now btn active when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
// const backTopBtn = document.querySelector("[data-back-top-btn]");
// const bookNowBtn = document.querySelector("[data-book-now-btn]");
const bottomMenu = document.querySelector("[data-bottom-menu]");

const headerActive = function () {
  if (window.scrollY > 300) {
    header.classList.add("active");
    bottomMenu.classList.add("active");
    // backTopBtn.classList.add("active");
    // bookNowBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    bottomMenu.classList.remove("active");
    // backTopBtn.classList.remove("active");
    // bookNowBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", headerActive);



/**
 * filter function
 */

const filterBtns = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter]");

let lastClickedFilterBtn = filterBtns[0];

const filter = function () {
  lastClickedFilterBtn.classList.remove("active");
  this.classList.add("active");
  lastClickedFilterBtn = this;

  for (let i = 0; i < filterItems.length; i++) {
    if (this.dataset.filterBtn === filterItems[i].dataset.filter ||
      this.dataset.filterBtn === "all") {

      filterItems[i].style.display = "block";
      filterItems[i].classList.add("active");

    } else {

      filterItems[i].style.display = "none";
      filterItems[i].classList.remove("active");

    }
  }
}

addEventOnElem(filterBtns, "click", filter);





