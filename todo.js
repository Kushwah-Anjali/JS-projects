let input = document.querySelector("input");
let addbtn = document.querySelector("button");
let taskList = document.querySelector("#task-list");
addbtn.addEventListener("click", () => {
  if (input.value === "") return;

  let list = document.createElement("li");

  let deletebtn = document.createElement("button");
  let updatebtn = document.createElement("button");

  list.textContent = input.value;

  deletebtn.textContent = "delete";
  updatebtn.textContent = "update";

  list.appendChild(deletebtn);
  list.appendChild(updatebtn);

  taskList.appendChild(list);
  deletebtn.addEventListener("click", () => {
    list.remove();
  });
  updatebtn.addEventListener("click", () => {
    
  });
  input.value = "";
});
