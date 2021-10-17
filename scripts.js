let input = document.getElementById("input-write")
let button = document.getElementById("button-add")
let tasks = document.getElementById("name-tasks-id")
let ListTasks = document.getElementById("tasks")

let arrayOfTasks = []
reloadTasks()

function showTasks() {
    let newLi = ""
    arrayOfTasks.forEach((works, index) => {

        newLi = newLi + `
        <li class="item-tasks ${ works.concluded == true ? "finish" : "" }">
            <button class="button-done" onclick="finishTasks(${index})">
                <i class="fas fa-rocket"></i>
            </button>

            <p class="name-tasks ${ works.concluded == true ? "finish" : "" }" id="name-tasks-id">${works.works}</p>

            <button class="button-delet" onclick="deletTasks(${index})">
                <i class="fas fa-trash"></i>
            </button>
        </li>
    `
    })

    ListTasks.innerHTML = newLi

    localStorage.setItem("list", JSON.stringify(arrayOfTasks))
}

function deletTasks(index) {
    arrayOfTasks.splice(index, 1)

    showTasks()
}

function addTasks() {
    arrayOfTasks.push({
        works: input.value,
        finish: false
    }) 

    showTasks()
}

function finishTasks(index) {
    arrayOfTasks[index].concluded = !arrayOfTasks[index].concluded

    showTasks()
}

function reloadTasks() {
    let myTasks = localStorage.getItem("list")

    arrayOfTasks = JSON.parse(myTasks)

    showTasks()
}

button.addEventListener("click", addTasks)

