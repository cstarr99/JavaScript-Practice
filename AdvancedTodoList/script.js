const form = document.querySelector("#new-todo-form");
const input = document.querySelector("#todo-input");
const list = document.querySelector("#list");
const template = document.querySelector("#list-item-template");
//This will be a prefix for any key/value pair we put into storage so that if we have the same name in other files they dont get mixed up.
const LOCAL_STORAGE_PREFIX = "ADVANCED_TODO_LIST-";
const TODOS_STORAGE_KEY = `${LOCAL_STORAGE_PREFIX}-todos`;
/* this array is made by using the loadtodos function. when the page is loaded up, if there are previous items in storage,
the function will bring those and turn them into an array, and whatever else you add to the list will just be added to that array. 
and if there is nothing then the function will just give you an empty array to work with.
*/
let todos = loadTodos();
todos.forEach((todo) => {
  renderTodo(todo);
});

//this eventlistener is to try and make whether the todo item is checked or not save with it.
list.addEventListener("change", (e) => {
  //if the thing that changes doesnt match the checkbox id(data-list-item-checkbox), then return because it isnt correct.
  //this helps us make sure that we only got the checkbox before we continue.
  if (!e.target.matches("[data-list-item-checkbox]")) return;
  //finding the parent(list-item) of the current thing being changed.
  const parent = e.target.closest(".list-item");
  //the unique id number of this item.
  const todoId = parent.dataset.todoId;
  //getting the current todo list item by finding which array items id matches the one being currently clicked.
  const todo = todos.find((t) => t.id === todoId);
  //will change the current todo items complete value in the object to true if checked and false if its not.
  todo.complete = e.target.checked;
  saveTodos();
});

//adding event listener to delete items.
list.addEventListener("click", (e) => {
  //if what we clicked on isnt the delete button then dont do anything.
  if (!e.target.matches("[data-button-delete]")) return;
  const parent = e.target.closest(".list-item");
  const todoId = parent.dataset.todoId;
  //removes item from screen
  parent.remove();
  //updating todos array to keep the ones where the ids are not equal. this will remove the deleted items from the list.
  todos = todos.filter((todo) => todo.id !== todoId);
  saveTodos();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = input.value;
  //if the input is nothing then dont accept it.
  if (inputValue === "") return;
  const newTodo = {
    name: inputValue,
    complete: false,
    //unique identifier to make sure no todo item can be the same. the id will be the exact time that item is made. so its impossible to have the same id.
    id: new Date().valueOf().toString(),
  };
  //add each input into an array.
  todos.push(newTodo);
  renderTodo(newTodo);
  saveTodos();
  input.value = "";
});

function loadTodos() {
  //todos in string format
  const todoString = localStorage.getItem(TODOS_STORAGE_KEY);
  //parse takes string and converts to array or object. this is an array.
  //the or [] is using a short circuit(look at notes). it states if there is no item to load then return and empty array. this makes it so that if you are a new user on the page with no todos then it wont send an error for having nothing to load.
  return JSON.parse(todoString) || [];
}

function renderTodo(newTodo) {
  //a template is something that you can use to repeat over and over again without it appearing in html.
  //this code creates a copy of the template from the html.
  const templateClone = template.content.cloneNode(true);
  const listItem = templateClone.querySelector(".list-item");
  listItem.dataset.todoId = newTodo.id;
  const textElement = templateClone.querySelector("[data-list-item-text]");
  const checkbox = templateClone.querySelector("[data-list-item-checkbox]");
  //checkbox becomes checked if complete is true.
  checkbox.checked = newTodo.complete;
  textElement.innerText = newTodo.name;
  list.appendChild(templateClone);
}

function saveTodos() {
  //todos storage key is the key, and the string array of todos is the value.
  localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos));
}
