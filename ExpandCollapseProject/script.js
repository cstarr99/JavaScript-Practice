document.addEventListener("click", (e) => {
  const currentButton = e.target;
  const cardHeader = e.target.closest(".card-header");
  const cardBody = cardHeader.nextElementSibling;

  if (e.target.matches("button") && currentButton.innerText === "Expand") {
    cardBody.classList.add("show");
    currentButton.innerText = "Collapse";
  } else if (
    e.target.matches("button") &&
    currentButton.innerText === "Collapse"
  ) {
    cardBody.classList.remove("show");
    currentButton.innerText = "Expand";
  }
});

//SECOND WAY TO DO IT.
// document.addEventListener("click", e => {
//     if (!e.target.matches(".expand-button")) return

//     const card = e.target.closest(".card")
//     const cardBody = card.querySelector(".card-body")

//     cardBody.classList.toggle("show")
//     if (e.target.innerText === "Expand") {
//       e.target.innerText = "Collapse"
//     } else {
//       e.target.innerText = "Expand"
//     }
//     // e.target.innerText = e.target.innerText === "Expand" ? "Collapse" : "Expand"
//   })
