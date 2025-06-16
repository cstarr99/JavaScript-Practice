const form = document.querySelector("#new-todo-form");
const input = document.querySelector("#todo-input");
const list = document.querySelector("#list");
const template = document.querySelector("#list-item-template");
const LOCAL_STORAGE_PREFIX = "[ADVANCED_TODO:]";
const TODOS_STORAGE_KEY = `${LOCAL_STORAGE_PREFIX}todos`;
const todos = loadTodo();
todos.forEach((todo) => {
  printTodo(todo);
});

list.addEventListener("change", (e) => {
  if (!e.target.matches("[data-list-item-checkbox]")) return;
  const parent = e.target.closest(".list-item");
  const listItemId = parent.dataset.todoID;
  const realTodo = todos.find((todo) => {
    listItemId === todo.id;
  });
  realTodo.complete = e.target.checked;

  saveTodo();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const todoItem = input.value;
  if (todoItem === "") return;
  const newTodo = {
    name: input.value,
    complete: false,
    id: new Date().valueOf().toString(),
  };
  todos.push(newTodo);
  printTodo(newTodo);
  saveTodo();
  input.value = "";
});

function printTodo(todoItem) {
  const templateClone = template.content.cloneNode(true);
  const textElement = templateClone.querySelector("[data-list-item-text]");
  const listItem = templateClone.querySelector(".list-item");
  listItem.dataset.todoID = todoItem.id;
  textElement.innerText = todoItem.name;
  list.appendChild(templateClone);
}

function loadTodo() {
  const todoString = localStorage.getItem(TODOS_STORAGE_KEY);
  return JSON.parse(todoString) || [];
}

function saveTodo() {
  localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos));
}

//complete item
//delete item
