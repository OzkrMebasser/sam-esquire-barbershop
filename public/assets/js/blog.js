const textContainers = document.querySelectorAll(".text-container");

const maxLength = 165;

textContainers.forEach((textContainer) => {
  if (textContainer.innerText.length > maxLength) {
    textContainer.innerText =
      textContainer.innerText.slice(0, maxLength) + "...";
  }
});
