let input = document.querySelector("input");
let addBtn = document.querySelector("#add");
let taskList = document.querySelector("#task-list");
let currentTask = null;
let tasks = [];
addBtn.addEventListener("click", () => {
  if (currentTask !== null) {
    updateTask();
  } else {
    createTask();
  }
});

function createTask() {
  if (input.value.trim() === "") return;

  const taskObj = {
    id: Date.now(),
    text: input.value,
  };

  tasks.push(taskObj);
  render();
  input.value = "";
}
function render() {
  taskList.innerHTML = "";
  tasks.forEach((e) => {
    let list = document.createElement("li");
    let task = document.createElement("span");
    let deletBtn = document.createElement("button");
    let updateBtn = document.createElement("button");
    task.textContent = e.text;
    list.setAttribute("data-id", e.id);
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
  });
}
function updateTask() {
  if (input.value.trim() === "") return;
  let task = tasks.find((m) => m.id === currentTask);
  if (!task) return;
  task.text = input.value;
  render();
  addBtn.innerHTML = `<i class="bi bi-plus-lg"></i>`;
  addBtn.classList.remove("btn-warning");
  addBtn.classList.add("btn-primary");
  currentTask = null;
  input.value = "";
}

taskList.addEventListener("click", (e) => {
  if (e.target.closest(".delete")) {
    let li = e.target.closest("li");
    let id = Number(li.dataset.id);
    tasks = tasks.filter((m) => m.id !== id);
    render();
  }
  if (e.target.closest(".update")) {
    let li = e.target.closest("li");
    let id = Number(li.dataset.id);
    let task = tasks.find((m) => m.id === id);
    if (!task) return;
    currentTask = id;
    input.value = task.text;
    addBtn.innerHTML = `<i class="bi bi-check-lg"></i>`;
    addBtn.classList.remove("btn-primary");
    addBtn.classList.add("btn-warning");
  }
});
