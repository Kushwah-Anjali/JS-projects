let input = document.querySelector("input");
let addbtn = document.querySelector("button");
let taskList=document.querySelector("#task-list");
addbtn.addEventListener("click", () => {
  console.log(input.value);
  
  input.value = "";
});
