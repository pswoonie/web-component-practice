
let taskList = ["todo1", "todo2", "todo3"];
const task = document.querySelector("add-todo");
let elemList = document.getElementById("todoList");

if (taskList.length > 0) {
    taskList.forEach((title) => {
        let todo = document.createElement("todo-item");
        todo.setAttribute("id", `todo-${title}`);
        todo.innerText = title;
        elemList.appendChild(todo);
    });
}

deleteTodoItem = (event) => {
    const { id } = event.detail;

    const index = taskList.indexOf(id.slice(5, id.length));

    if (index > -1) {
        taskList.splice(index, 1);
    }
}

drawTodoItem = (event) => {
    const { task } = event.detail;

    if (taskList.includes(task)) {
        alert("Task Already Exists!!!");
        return;
    }

    taskList.push(task);

    let todo = document.createElement("todo-item");
    todo.setAttribute("id", `todo-${task}`);
    todo.innerText = task;
    elemList.appendChild(todo);
}

elemList.addEventListener("delete-event", deleteTodoItem);
task.addEventListener("new-task", drawTodoItem);
