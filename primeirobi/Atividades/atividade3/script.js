const input = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

addBtn.addEventListener("click", () => {
  const taskText = input.value;

  const li = document.createElement("li");
  li.textContent = taskText;

  taskList.appendChild(li);

  input.value = "";
});

taskList.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.remove();
  }
});