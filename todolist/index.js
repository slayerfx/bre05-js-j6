const todolist = document.getElementById("todo-list");
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const li = document.createElement("li");
  li.classList.add("todo-item");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("todo-checkbox");

  const span = document.createElement("span");
  span.classList.add("todo-text");
  span.textContent = todoInput.value;

  const button = document.createElement("button");
  button.classList.add("delete-btn");
  button.textContent = "Supprimer";

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(button);
  todolist.appendChild(li);
  todoInput.value = "";

  checkbox.addEventListener("change", function () {
    li.classList.toggle("completed");
  });

  button.addEventListener("click", function () {
    li.remove();
  });
});
