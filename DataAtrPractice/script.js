//Making code that will count how many times the button is clicked.
//Gets the button element from HTML.
const btn = document.querySelector("button");

//Adds event listener that whenever the button is clicked it will add 1 to the "data-clicks" counter.
document.addEventListener("click", () => {
  //variable that hold the number value of buttons "data-clicks" value.
  const currentClick = parseInt(btn.dataset.clicks);
  //adds 1 to current click number.
  btn.dataset.clicks = currentClick + 1;
});
