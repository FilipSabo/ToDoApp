
let tasks = getTasks()
createIf(tasks)


const firmSub = document.querySelector(".formSub")
firmSub.addEventListener("submit", (e) => {
    e.preventDefault()

    const textCont = "Pridané"
    notification(textCont)

    
    if(e.target.elements.task.value !== ""){
        tasks.push({
            id: uuidv4(), 
            task: e.target.elements.task.value
        })
    }

    saveTasks()

    e.target.reset()

    document.querySelector(".listToDo").innerHTML = ""

    createIf(tasks)
})

const deleteButton = document.querySelector(".deleteButton")
deleteButton.addEventListener("click", () => {

    const textCont = "Zoznam Prázdny"
    notification(textCont)

    deleteAllTasks()
})
 const check = document.querySelector(".checkBox")
 check.addEventListener("change", () => {
    
 })
