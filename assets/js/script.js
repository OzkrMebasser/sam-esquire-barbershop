'use strict';
 
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


const testiomnialData = [
  {
      avatar: "https://img.freepik.com/free-photo/woman-with-long-hair-yellow-hoodie-with-word-music-it_1340-39068.jpg",
      name: "Simonette Lindermann",
      review: "Mind-blowing discovery! changed my routine. Essential for everyone. A vise advice to all interested. Can't imagine without it!"
  },
  {
      avatar: "https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg",
      name: "Merilee Beal",
      review: "Unbelievable gem! Altered my life. A must-have now. Wholeheartedly advise it to everyone. An absolute game-changer"
  },
  {
      avatar: "https://img.freepik.com/free-photo/handsome-african-guy-with-stylish-haircut-taking-photo-digital-camera_171337-1345.jpg",
      name: "Suzi Lankester",
      review: "Phenomenal addition! Completely transformed my days. Can't go without it. Strongly endorse for all. A game-changer for sure!"
  },
  {
      avatar: "https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg",
      name: "Gaston Cunnow",
      review: "Amazing product! It changed my life. Can't live without it now. Highly recommended to everyone!"
  },
  {
      avatar: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
      name: "Marys Lobb",
      review: "Life-altering find! Indispensable now. Enthusiastically suggest to all. A game-changer for everyone!"
  },
  {
      avatar: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
      name: "Marys Lobb",
      review: "Life-altering find! Indispensable now. Enthusiastically suggest to all. A game-changer for everyone!"
  }, {
      avatar: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
      name: "Marys Lobb",
      review: "Life-altering find! Indispensable now. Enthusiastically suggest to all. A game-changer for everyone!"
  }]
var slideHolder = document.querySelector("#slideHolder")
for (let i of testiomnialData) slideHolder.innerHTML += `<div class="swiper-slide"> <div class="ImgHolder"><img src="${i.avatar}"></div><div class="ContentHolder"><h3>${i.name}</h3><p>${i.review}</p></div></div>`

const swiper = new Swiper('#craouselContainer', {
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 2.3,
  loop: true,
  spaceBetween: 30,
  effect: "coverflow",
  coverflowEffect: {
      rotate: 0,
      depth: 800,
      slideShadows: true,
  },
  pagination: {
      el: '.swiper-pagination',
      clickable: true
  },
  autoplay: { delay: 5000 }
});
window.onresize = queryResizer
queryResizer()
function queryResizer() {
  if (window.innerWidth < 724) swiper.params.slidesPerView = 2
  if (window.innerWidth > 501) swiper.params.slidesPerView = 2
  if (window.innerWidth > 724) swiper.params.slidesPerView = 2.3
  if (window.innerWidth < 501) swiper.params.slidesPerView = 1
  swiper.update()
}

