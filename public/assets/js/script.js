"use strict";

const track = document.querySelector(".track");
const content = document.querySelector(".content");

track.addEventListener("animationiteration", () => {
  track.style.transition = "none";
  track.style.transform = `translateX(${content.clientWidth}px)`;
});

// JavaScript

// // Seleccionar el elemento de video
// const video = document.querySelector('.hero-video');

// // Detectar Safari
// const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

// // Si es Safari
// if (isSafari) {

//   // Mutea el video
//   video.muted = true;

//   // Reproducir el video
//   video.play();

// } else {

//   // Autoplay para otros navegadores
//   video.autoplay = true;

// }

const phrases = [
  "We specialize in precision cuts for men",
  "Our barbers are trained in the latest men's styles and techniques",
  "Sharp cuts, sharp service.",
  "Where every cut is a work of art!",
  "Trimming traditions, modern styles!",
  "Masterful cuts, lasting impressions!",
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
};

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
    ? (menuIcon.name = "cut-outline")
    : (menuIcon.name = "menu-outline");
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
const backTopBtn = document.querySelector("[data-back-top-btn]");
// const bookNowBtn = document.querySelector("[data-book-now-btn]");
const bottomMenu = document.querySelector("[data-bottom-menu]");
const mediaBtn = document.querySelector("[data-media-btn]");

// const appointmentBtn = function () {
//   if (window.scrollY > 550 && window.scrollY <= 2700) {
//     bottomMenu.classList.add("active");
//   } else if (window.scrollY > 2700 && window.scrollY <= 5000) {
//     bottomMenu.classList.remove("active");
//   } else if (window.scrollY > 5000) {
//     bottomMenu.classList.add("active");
//   }
//   else{
//     bottomMenu.classList.remove("active");
//   }
// };

// addEventOnElem(window, "scroll", appointmentBtn);

const appointmentBtn = function () {
  const isMobile = window.innerWidth <= 768; // Change the breakpoint as needed

  if (isMobile) {
    if (window.scrollY > 560 && window.scrollY <= 2700) {
      bottomMenu.classList.add("active");
    } else if (window.scrollY > 2700 && window.scrollY <= 6200) {
      bottomMenu.classList.remove("active");
    } else if (window.scrollY > 6200) {
      bottomMenu.classList.add("active");
    } else {
      bottomMenu.classList.remove("active");
    }
  } else {
    if (window.scrollY > 530 && window.scrollY <= 1800) {
      bottomMenu.classList.add("active");
    } else if (window.scrollY > 1800 && window.scrollY <= 3500) {
      bottomMenu.classList.remove("active");
    } else if (window.scrollY > 3500) {
      bottomMenu.classList.add("active");
    } else {
      bottomMenu.classList.remove("active");
    }
  }
};

window.addEventListener("scroll", appointmentBtn);




const headerActive = function () {
  if (window.scrollY > 300) {
    header.classList.add("active");
    // bottomMenu.classList.add("active");
    backTopBtn.classList.add("active");
    // bookNowBtn.classList.add("active");
    mediaBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    // bottomMenu.classList.remove("active");
    backTopBtn.classList.remove("active");
    // bookNowBtn.classList.remove("active");
    mediaBtn.classList.remove("active");
  }
};

addEventOnElem(window, "scroll", headerActive);


/**
 * Bottom button 
 */

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
    if (
      this.dataset.filterBtn === filterItems[i].dataset.filter ||
      this.dataset.filterBtn === "all"
    ) {
      filterItems[i].style.display = "block";
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].style.display = "none";
      filterItems[i].classList.remove("active");
    }
  }
};

addEventOnElem(filterBtns, "click", filter);

const testiomnialData = [
  {
    avatar:
      "https://lh3.googleusercontent.com/a-/AD_cMMQak1wSznHhKgft8h3hUp3aiOSxIwafbWvq21-gDnaAXBU=w66-h66-p-rp-mo-ba2-br100",
    name: "Ken Hall",
    review:
      "Best barbershop in Victoria, hands down. Sam does the best fades for an unbelievable price. You can go to another shop and pay double for lower quality!",
    review_link: "https://g.co/kgs/CHDwGw",
  },
  {
    avatar:
      "https://lh3.googleusercontent.com/a-/AD_cMMSjljaD89VEy3iVMMtj9MYGsA3D4hb1nC8EBldIlUvewWE=w66-h66-p-rp-mo-ba2-br100",
    name: "Ian Darrel M-T.",
    review:
      "I have been going to Esquire for almost 4 years now. Having moved from Toronto, it was tough to find a solid barber in a smaller city like Victoria until I found Sam. He is a master of his craft ...",
    review_link: "https://goo.gl/maps/25QbH7r9zEQJWmF96",
  },

  {
    avatar:
      "https://lh3.googleusercontent.com/a-/AD_cMMSmPFh6v530YN7Cq3jYsG5FP25XZKn73SaDWFzCaGttT7E=w66-h66-p-rp-mo-br100",
    name: "Victor Lau",
    review:
      "Excellent! Had a wonderful, wise chat with Sam - great mindsets balanced by pragmaticism, growth, and logical utility to help oneself and others. Also excellent haircuts consistently.",
    review_link: "https://goo.gl/maps/cxBbjByHZaowJx6Z6",
  },

  {
    avatar:
      "https://lh3.googleusercontent.com/a-/AD_cMMQu4AT0JjBg6nWS0sC8E0RPDBEDwetbYjw8d2lY2_UjVBI=w66-h66-p-rp-mo-br100",
    name: "abhi jindal",
    review:
      "A great barber shop. Very impressive work. The owner is great, loving friendly guy, works mire than expectations.. never ever had a bad haircut from him. Must visit shop.",
    review_link: "https://goo.gl/maps/i6h18z8RzV9cUUX18",
  },
  {
    avatar: "https://lh3.googleusercontent.com/a-/AD_cMMTKCPce1gfp1aZGrWVzxdydKsSKbzvZu995k2-VMVC9y3c=w66-h66-p-rp-mo-ba2-br100",
    name: "Mack",
    review:
      "Great guy, genuine and quick cut. Nice shop,  good location! I'll definately be going back. 😃 …",
    review_link: "https://goo.gl/maps/JqitQ7mmkwCKTgHCA",
  },

  {
    avatar:
      "https://lh3.googleusercontent.com/a-/AD_cMMTS2a-HwrNw4VyylkOHFjSW1gjktLxFys2RG8vtahSellA=w66-h66-p-rp-mo-br100",
    name: "Mehran FM",
    review:
      "I’ve been going here for 3+ years, Sam always does a great job on my hair, and doesn’t take too long. He takes walk ins too which is nice so I don’t have to make an appointment. Highly recommend.",
    review_link: "https://goo.gl/maps/GwJRTfKHBJQ71AWz7",
  },
  {
    avatar: "https://lh3.googleusercontent.com/a-/AD_cMMQFdXY-H3W3ICf16VXbarYdFTgA_T1KOvKOS9yvacLND98=w66-h66-p-rp-mo-br100",
    name: "Mo Aref",
    review: "Amazing Barber! One of the best in the city! always consistent and attention to detail. Hard working guy make sure to support him!",
    review_link: "https://goo.gl/maps/nCrYziYraWDfomBp7",
  },
];

let slideHolder = document.querySelector("#slideHolder");
for (let i of testiomnialData)
  slideHolder.innerHTML += `<div class="swiper-slide"> <p class="review-indicator">Click image below to see review in Google</p><div class="ImgHolder"><a class="ImgHolder" href="${i.review_link}" target="_blank"><img src="${i.avatar}"></a></div><div class="ContentHolder"><h3>${i.name}</h3><p>${i.review}</p></div></div>`;

const swiper = new Swiper("#craouselContainer", {
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
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: { delay: 5000 },
});
window.onresize = queryResizer;
queryResizer();
function queryResizer() {
  if (window.innerWidth < 724) swiper.params.slidesPerView = 2;
  if (window.innerWidth > 501) swiper.params.slidesPerView = 2;
  if (window.innerWidth > 724) swiper.params.slidesPerView = 2.3;
  if (window.innerWidth < 501) swiper.params.slidesPerView = 1;
  swiper.update();
}

// Get all elements with class "float"
const floats = document.querySelectorAll(".float");

// Loop through each element
floats.forEach((float) => {
  // Add click event listener
  float.addEventListener("click", () => {
    // Toggle the "open" class
    float.classList.toggle("open");
  });
});
