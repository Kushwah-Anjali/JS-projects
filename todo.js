let input = document.querySelector("input");
let taskList = document.querySelector("#task-list");
let addTask = document.querySelector("#add");
let currentTask = null;

addTask.addEventListener("click", () => {
  if (currentTask !== null) {
    currentTask.textContent = input.value;
    input.value = "";
    addTask.textContent = "Add Task";
    currentTask = null;
  } else {
    if (input.value.trim() === "") return;
    let list = document.createElement("li");
    let updateBtn = document.createElement("button");
    let deleteBtn = document.createElement("button");
    let task = document.createElement("span");
    task.textContent = input.value;
    updateBtn.textContent = "update";
    deleteBtn.textContent = "delete";
    list.appendChild(task);
    list.appendChild(updateBtn);
    list.appendChild(deleteBtn);
    taskList.appendChild(list);
    deleteBtn.addEventListener("click", () => {
      list.remove();
    });
    updateBtn.addEventListener("click", () => {
      currentTask = task;
      input.value = task.textContent;
      addTask.textContent = "update";
    });

    input.value = "";
  }
});
