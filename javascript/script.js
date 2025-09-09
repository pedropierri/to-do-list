// Selecionando elementos do html e declarando variáveis
const inputNewTask = document.querySelector("#new-task")
const addButton = document.querySelector("#btn-add")
const taskList = document.querySelector("#task-list")

addButton.addEventListener('click', addTask)
console.log("fora")

function addTask(event) {
    event.preventDefault()
    console.log("hi")
}