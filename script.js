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

const doneTasks = getDoneTasks()

const date = {
    day: new Date().getDate(),
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
    hour: new Date().getHours(),
    mins: new Date().getMinutes()
}

const doneTask = document.querySelector(".doneTask")
doneTask.addEventListener("click", (e) => {
    const allTasksDiv = document.querySelectorAll(".oneTask")
    allTasksDiv.forEach((oneTaskDiv) => {
        if(oneTaskDiv.children[0].checked){
            doneTasks.push({
                task: oneTaskDiv.children[1].textContent,
                date: `${date.day}.${date.month}. ${date.year}  ${date.hour}:${date.mins}`
            })
            localStorage.setItem("doneTasks", JSON.stringify(doneTasks))
            removeTask(tasks, oneTaskDiv.id)
            saveTasks()
            toPageAgain()
        }
    })
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

