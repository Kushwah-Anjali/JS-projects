let input = document.querySelector("input");
let addBtn = document.querySelector("#add");
let taskList = document.querySelector("#task-list");
let currenTask = null;
addBtn.addEventListener("click", () => {
  let list = document.createElement("li");
  let task = document.createElement("span");
  let deletBtn = document.createElement("button");
  let updateBtn = document.createElement("button");
  if (input.value.trim() == "") return;
  if (currenTask !== null) {
    currenTask.textContent = input.value;
    addBtn.textContent = "Add Task";
    currenTask = null;
  } else {
    task.textContent = input.value;
    deletBtn.textContent = "Remove";
    updateBtn.textContent = "Update";
    list.appendChild(task);
    list.appendChild(deletBtn);
    list.appendChild(updateBtn);
    taskList.appendChild(list);

    deletBtn.addEventListener("click", () => {
      list.remove();
    });
    updateBtn.addEventListener("click", () => {
      currenTask = task;
      input.value = task.textContent;
      addBtn.textContent = "update";
    });
  }
  input.value = "";
});
