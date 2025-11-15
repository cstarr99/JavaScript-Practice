const item = document.querySelector("#input");
const form = document.querySelector(".add-item");
const incompleteList = document.querySelector(".incomplete-items");
const completeList = document.querySelector(".complete-items");

form.addEventListener("click", (e) => {
  e.preventDefault();
  const div = document.createElement("div");
  div.innerText = item.value;
  div.classList.add("list-item");
  incompleteList.appendChild(div);
  console.log(div);
});

item.addEventListener("click", () => {
  incompleteList.removeChild(item);
  completeList.appendChild(item);
});
