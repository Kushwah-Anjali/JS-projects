let input = document.querySelector("input");
let addBtn = document.querySelector("#add");
let taskList = document.querySelector("#task-list");
let currentTask = null;
addBtn.addEventListener("click", () => {
  if (input.value.trim() === "") return;
  if (currentTask !== null) {
    updateTask();
  } else {
    createTask();
  }
});
function createTask() {
  let list = document.createElement("li");
  let task = document.createElement("span");
  let deletBtn = document.createElement("button");
  let updateBtn = document.createElement("button");
  task.textContent = input.value;
  list.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );
  deletBtn.textContent = "Remove";
  updateBtn.textContent = "Update";
  deletBtn.classList.add("btn", "btn-outline-danger", "btn-sm", "delete");
  updateBtn.classList.add("btn", "btn-outline-info", "btn-sm", "update");
  deletBtn.innerHTML = `<i class="bi bi-trash"></i>`;
  updateBtn.innerHTML = `<i class="bi bi-pencil"></i>`;
  let btnGroup = document.createElement("div");
  btnGroup.classList.add("btn-group");
  btnGroup.appendChild(updateBtn);
  btnGroup.appendChild(deletBtn);
  list.appendChild(task);
  list.appendChild(btnGroup);
  taskList.appendChild(list);
  input.value = "";
}

function updateTask() {
  currentTask.textContent = input.value;
  addBtn.innerHTML = `<i class="bi bi-plus-lg"></i>`;
  addBtn.classList.remove("btn-warning");
  addBtn.classList.add("btn-primary");
  currentTask = null;
  input.value = "";
}

function deleteTask(list) {
  list.remove();
  input.value = "";
}
taskList.addEventListener("click", (e) => {
  if (e.target.closest(".delete")) {
    e.target.closest("li").remove();
  }
  if (e.target.closest(".update")) {
    let task = e.target.closest("li").querySelector("span");
    currentTask = task;
    input.value = task.textContent;
    addBtn.innerHTML = `<i class="bi bi-check-lg"></i>`;
    addBtn.classList.remove("btn-primary");
    addBtn.classList.add("btn-warning");
  }
});
