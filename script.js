
let tasks = getTasks()
createIf(tasks)

const firmSub = document.querySelector(".formSub")
firmSub.addEventListener("submit", (e) => {
    e.preventDefault()

    
    if(e.target.elements.task.value !== ""){
        tasks.push({
            id: uuidv4(), 
            task: e.target.elements.task.value
        })
    }

    saveTasks()

    e.target.elements.task.value = ""

    document.querySelector(".listToDo").innerHTML = ""

    createIf(tasks)
})

const deleteButton = document.querySelector(".deleteButton")
deleteButton.addEventListener("click", () => {
    deleteAllTasks()
})

