
const removeTask = (myTask, id) => {
    let index = myTask.findIndex((taskToCheck) => {
        return taskToCheck.id === id
    })

    if(index > -1 ){
        myTask.splice(index,1)
    }
}



const newHTMLStructure = (oneTask, id) => {
    const newDiv = document.createElement("div")
    const newSpan = document.createElement("span")
    const newButton = document.createElement("button")
    const newCheckBox = document.createElement("input")

    newCheckBox.type = "checkbox"
    newCheckBox.classList.add("checkBox")
    newDiv.appendChild(newCheckBox) 
    
  
    newSpan.textContent = oneTask.task
    newDiv.appendChild(newSpan)

    

    newButton.textContent = "Vymazať"
    newDiv.appendChild(newButton)

    newDiv.classList.add("oneTask")
    if(id % 2 !==0){
        newDiv.style.backgroundColor = "grey"
    }
    

    newButton.addEventListener("click", (e) => {
        e.preventDefault()

        removeTask(tasks, oneTask.id)
        saveTasks()
        toPageAgain()
        
        const textCont = "Vymazané"
        notification(textCont)
        
    })

    return newDiv
}

const saveTasks = () => {
    localStorage.setItem("task", JSON.stringify(tasks))
}

const getTasks = () => {
    let myTask = localStorage.getItem("task")

    if(myTask !== null){
        return JSON.parse(myTask)
    } else {
        return []
    }
}



const createIf = (tasks) => {
    if(tasks.length !== 0){
        tasks.forEach((oneTask, index) => {
            const newContent = newHTMLStructure(oneTask, index)
    
            document.querySelector(".listToDo").appendChild(newContent)
        })
    } else {
        const invDiv = document.createElement("div")
        const invite = document.createElement("paragraph")
        invDiv.classList.add("invite")

        invite.textContent = "Ahoj, zadaj svoje úlohy"

        invDiv.appendChild(invite)

        document.querySelector(".listToDo").appendChild(invDiv)

    }
}

const toPageAgain = () => {
    document.querySelector(".listToDo").innerHTML = ""

    const filtredTasks = getTasks()

    filtredTasks.forEach((oneTask, index) => {
        const newConten = newHTMLStructure(oneTask, index)

        document.querySelector(".listToDo").appendChild(newConten)
    })
}

const deleteAllTasks = () => {
    document.querySelector(".listToDo").innerHTML =""
    tasks =[]
    saveTasks()
    const invDiv = document.createElement("div")
        const invite = document.createElement("paragraph")
        invDiv.classList.add("invite")

        invite.textContent = "Ahoj, zadaj svoje úlohy"

        invDiv.appendChild(invite)

        document.querySelector(".listToDo").appendChild(invDiv)

    
}

const notification = (textCont) => {
    let notification = document.querySelector(".notification")
    notification.textContent = textCont
    notification.style.visibility= "visible"
    setTimeout(() => {
        notification.style.visibility= "hidden"
    },1000)
    
}