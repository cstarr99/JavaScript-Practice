const form = document.querySelector("#new-todo-form");
const input = document.querySelector("#todo-input");
const list = document.querySelector("#list");
const template = document.querySelector("#list-item-template");
const LOCAL_STORAGE_PREFIX = "[ADVANCED_TODO:]";
const TODOS_STORAGE_KEY = `${LOCAL_STORAGE_PREFIX}todos`;
let todos = loadTodo();
todos.forEach((todo) => {
  printTodo(todo);
});

list.addEventListener("change", (e) => {
  if (!e.target.matches("[data-list-item-checkbox]")) return;
  const parent = e.target.closest(".list-item");
  const listItemId = parent.dataset.todoId;
  const realTodo = todos.find((t) => {
    return t.id === listItemId;
  });
  realTodo.complete = e.target.checked;
  saveTodo();
});

list.addEventListener("click", (e) => {
  if (!e.target.matches("[data-button-delete]")) return;
  const parent = e.target.closest(".list-item");
  const listItemId = parent.dataset.todoId;
  parent.remove();
  todos = todos.filter((t) => t.id !== listItemId);
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
  listItem.dataset.todoId = todoItem.id;
  const checkbox = templateClone.querySelector("[data-list-item-checkbox]");
  checkbox.checked = todoItem.complete;
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
