const modal = document.querySelector(".overlay");

setTimeout(function() {
  modal.classList.add("show-modal");
}, 1000);

document.querySelector("#close-modal-btn").addEventListener("click", () => {
  modal.classList.remove("show-modal");
  modal.classList.add("hide-modal");
  
});
