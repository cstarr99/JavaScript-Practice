const form = document.querySelector(".form");
const list = document.querySelector(".list");
const input = document.querySelector("#input");
const completedList = document.querySelector(".completed-list");

//form that when the form is submitted will add item to list.
form.addEventListener("submit", (e) => {
  //prevents form from refreshing.
  e.preventDefault();
  //creating a new div in html.
  const item = document.createElement("div");
  //adds whatever is typed into input bar to the new div.
  item.innerText = input.value;
  //adds class of "list-item" to new div.
  item.classList.add("list-item");
  //adds new div to the list.
  list.appendChild(item);
  //resets the input bar back to nothing.
  input.value = "";
  //when clicked, item moves to "completed items" section, then removes the item from list.
  item.addEventListener("click", () => {
    completedList.appendChild(item);
    list.removeChild(item);
  });
});
