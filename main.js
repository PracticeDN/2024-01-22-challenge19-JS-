const buttonEl = document.querySelector("button");
const inputEl = document.querySelector("input");
const ulEl = document.querySelector("ul");

let toDoList = [];

const storedTodos = localStorage.getItem("todos");
toDoList = JSON.parse(storedTodos);

console.log(toDoList);

toDoList.forEach((toDo) => {
  const li = document.createElement("li");
  li.textContent = toDo;
  ulEl.appendChild(li);
});

buttonEl.addEventListener("click", (e) => {
  e.preventDefault();

  const value = inputEl.value;
  toDoList.push(value);
  localStorage.setItem("todos", JSON.stringify(toDoList));
  addTodoToList(value);

  inputEl.value = "";
});
