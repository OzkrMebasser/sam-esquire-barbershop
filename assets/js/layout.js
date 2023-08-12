/**
 * add event on element
 */
"use strict"
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
  
  