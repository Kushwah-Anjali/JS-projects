let input = document.querySelector("input");
let addBtn = document.querySelector("#add");
let taskList = document.querySelector("#task-list");
let currentTask = null;
addBtn.addEventListener("click", () => {
  createTask();
});
function createTask() {
  if (currentTask !== null) {
    if (input.value.trim() === "") return;
    updateTask();
  } else {
    if (input.value.trim() === "") return;
    let list = document.createElement("li");
    let task = document.createElement("span");
    let deletBtn = document.createElement("button");
    let updateBtn = document.createElement("button");
    task.textContent = input.value;
    deletBtn.textContent = "Remove";
    updateBtn.textContent = "Update";
    list.appendChild(task);
    list.appendChild(deletBtn);
    list.appendChild(updateBtn);
    taskList.appendChild(list);

    deletBtn.addEventListener("click", () => {
      deleteTask(list);
    });
    updateBtn.addEventListener("click", () => {
      currentTask = task;
      input.value = task.textContent;
      addBtn.textContent = "update";
    });
  }
  input.value = "";
}
function updateTask() {
  currentTask.textContent = input.value;
  addBtn.textContent = "Add Task";
  currentTask = null;
}

function deleteTask(list) {
  list.remove();
  input.value = "";
}
