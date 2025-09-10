// Selecionando elementos do html e declarando variáveis
const inputNewTask = document.querySelector("#new-task")
const addButton = document.querySelector("#btn-add")
const taskList = document.querySelector("#tasks-list")
const notification = document.querySelector("#notification")    
const checkedTaskList = document.querySelector("#checked-tasks-list")
const checkTasksButton = document.querySelector('#checked-tasks-btn')
const taskArray = []
const checkTaskArray = []

addButton.addEventListener('click', addTask)
checkTasksButton.addEventListener('click', checkTask)

function addTask(event) {
    event.preventDefault()
    
    if (inputNewTask.value !== '') {
        let newTask = inputNewTask.value.trim()

        taskArray.push(newTask) // Acrescenta task no array
        inputNewTask.value = '' // Limpa o input

        
        renderTasks()
        displayNotification("Task added successfully!", "success-msg");
    } else {
        displayNotification("Enter a task!", "error-msg")
    }   
}

function renderTasks() {
    taskList.innerHTML = ''

    for (let i = 0; i < taskArray.length; i++) {
        const task = taskArray[i]

        const li = document.createElement("li")
        li.textContent = task
        
        const checkButton = document.createElement("button")
        checkButton.textContent = "Check"
        checkButton.setAttribute('data-index', i)
        checkButton.addEventListener('click', checkTask)
        checkButton.classList.add("check-btn")


        const deleteButton = document.createElement("button")
        deleteButton.textContent = "Remove Task"
        deleteButton.setAttribute('data-index', i)
        deleteButton.addEventListener('click', removeTask)
        deleteButton.classList.add("delete-btn")

        li.appendChild(checkButton)
        li.appendChild(deleteButton)

        taskList.appendChild(li)
    }
}

function removeTask(event) {
    const index = event.target.getAttribute('data-index')

    taskArray.splice(index, 1)

    displayNotification("Task removed successfully!", "success-msg")
    renderTasks()
}

function checkTask(event) {
    const index = event.target.getAttribute('data-index')

    checkTaskArray.push(taskArray[index])
    taskArray.splice(index, 1)

    displayNotification("Task checked successfully", "success-msg")
    renderTasks()
}

function renderCheckedTasks() {
       
}

function displayNotification(message, className) {
    notification.className = ''
    notification.classList.add(className)
    notification.textContent = message
}