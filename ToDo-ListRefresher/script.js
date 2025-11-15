const input = document.querySelector("#input");
const form = document.querySelector(".add-item");
const incompleteList = document.querySelector(".incomplete-items");
const completeList = document.querySelector(".complete-items");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const div = document.createElement("div");
  div.innerText = input.value;
  div.classList.add("list-item");
  incompleteList.appendChild(div);

  div.addEventListener("click", () => {
    incompleteList.removeChild(div);
    completeList.appendChild(div);
  });
});
