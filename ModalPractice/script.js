const modal = document.querySelector("#modal");
const openModalBtn = document.querySelector("#open-modal-btn");
const closeModalBtn = document.querySelector("#close-modal-btn");
const overlay = document.querySelector("#overlay");

//Create a click event listener for the open-modal-btn that adds the class "open" to the modal
openModalBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.add("open");
  //Also add the class "open" to the overlay
  overlay.classList.add("open");
});

// Create a click event listener for the close-modal-btn that removes the class "open" from the modal
closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("open");
  //remove the class "open" from the overlay
  overlay.classList.remove("open");
});

//Add a click event listener to the overlay that removes the class "open" from the modal and the overlay
overlay.addEventListener("click", () => {
  overlay.classList.remove("open");
  modal.classList.remove("open");
});
