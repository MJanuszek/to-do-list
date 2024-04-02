const addBtn = document.getElementById("add-btn");
const addInput = document.getElementById("next-task-input");
const tasksList = document.getElementById("tasks-list");
let inputValue = "";
const myTasks = [
  { description: "Buy concert tickets", id: 1 },
  { description: "Organize halloween party", id: 2 },
  { description: "Meet with Julia", id: 3 },
];

function displayTasksList() {
  tasksList.innerHTML = "";
  myTasks.forEach((task) => {
    let li = document.createElement("li");
    li.classList.add("task");
    li.textContent = task.description;
    li.setAttribute("data-id", task.id);
    li.addEventListener("click", removeFromListFn);
    tasksList.appendChild(li);
  });
}

function addNewTaskFn() {
  if (inputValue.trim() === "") {
    return;
  } else {
    myTasks.push({ description: inputValue, id: myTasks.length + 1 });
    inputValue = "";
    addInput.value = "";
    console.log(myTasks);
  }
  displayTasksList();
}

function getInputChangeFn(e) {
  inputValue = e.target.value;
}

function removeFromListFn(e) {
  const taskId = parseInt(e.target.getAttribute("data-id"));
  const taskIndex = myTasks.findIndex((task) => task.id === taskId);
  if (taskIndex !== -1) {
    myTasks.splice(taskIndex, 1);
    displayTasksList();
  }
}

addInput.addEventListener("change", getInputChangeFn);
addBtn.addEventListener("click", addNewTaskFn);
displayTasksList();
