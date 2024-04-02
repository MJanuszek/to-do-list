const addBtn = document.getElementById("add-btn");
const addInput = document.getElementById("next-task-input");
const tasksList = document.getElementById("tasks-list");
let inputValue = "";
const myTasks = [
  { description: "Buy concert tickets" },
  { description: "Organize halloween party" },
  { description: "Meet with Julia" },
];

function displayTasksList() {
  tasksList.innerHTML = "";
  myTasks.forEach((task) => {
    let li = document.createElement("li");
    li.classList.add("task");
    li.textContent = task.description;
    tasksList.appendChild(li);
  });
}

function addNewTaskFn() {
  if (inputValue.trim() === "") {
    return;
  } else {
    myTasks.push({ description: inputValue });
    inputValue = "";
    addInput.value = "";
    console.log(myTasks);
  }
  displayTasksList();
}

function getInputChangeFn(e) {
  inputValue = e.target.value;
}

addInput.addEventListener("change", getInputChangeFn);
addBtn.addEventListener("click", addNewTaskFn);
displayTasksList();
