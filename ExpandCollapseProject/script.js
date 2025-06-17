const button = document.querySelector(".expand-button");
const cardBody = document.querySelector(".card-body");
let cardHeader = Array.from(document.querySelectorAll(".card-header"));
let buttonArray = [];

button.addEventListener("click", () => {
  if (button.innerText === "Expand") {
    cardBody.classList.add("show");
    button.innerText = "Collapse";
  } else if (button.innerText === "Collapse") {
    cardBody.classList.remove("show");
    button.innerText = "Expand";
  }
});
