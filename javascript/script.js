// Selecionando elementos do html e declarando variáveis
const inputNewTask = document.querySelector("#new-task")
const addButton = document.querySelector("#btn-add")
const taskList = document.querySelector("#task-list")
const notification = document.querySelector("#notification")

addButton.addEventListener('click', addTask)

function addTask(event) {
    event.preventDefault()
    
    if (inputNewTask.value !== '') {
        let newTask = inputNewTask.value
        notification.classList.toggle("sucess-msg")
        notification.textContent = "Task added successfully"
    } else {
        notification.classList.add("error-msg")
        notification.textContent = "Enter a task!"
    }   
}