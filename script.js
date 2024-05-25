
let tasks = getTasks()
let checkBoxChecked = checkedGet()
createIf(tasks, checkBoxChecked)


// console.log(checkBoxChecked)



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



const checkboxes = document.querySelectorAll(".checkBox")
checkboxes.forEach((oneCheck) => {
    oneCheck.addEventListener("click", (e) => {
        if(e.shiftKey && oneCheck.checked){
            for( let i =0; i < checkboxes.length; i++)
                checkboxes[i].checked = true
        }
        if(e.shiftKey && !oneCheck.checked){
            for( let i =0; i < checkboxes.length; i++)
                checkboxes[i].checked = false
        }
    })
})