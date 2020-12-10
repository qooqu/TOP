import submits from "./submits";

function editTodoForm(todo) {
    let form = document.createElement("form");
    form.id = `edit-todo-${todo.title}`;

    let inputTitle = document.createElement("input");
    inputTitle.type = "text";
    inputTitle.name = "title";
    inputTitle.value = todo.title;

    let inputDesc = document.createElement("input");
    inputDesc.type = "text";
    inputDesc.name = "description";
    inputDesc.value = todo.description;

    let inputDate = document.createElement("input");
    inputDate.type = "text";
    inputDate.name = "dueDate";
    inputDate.value = todo.dueDate;

    let inputPriority = document.createElement("input");
    inputPriority.type = "text";
    inputPriority.name = "priority";
    inputPriority.value = todo.priority;

    let inputSubmit = document.createElement("input");
    inputSubmit.type = "submit";
    inputSubmit.value = "submit";

    form.appendChild(inputTitle);
    form.appendChild(inputDesc);
    form.appendChild(inputDate);
    form.appendChild(inputPriority);
    form.appendChild(inputSubmit);

    form.addEventListener("submit", submits.editTodoSubmit, true);

    return form;
}

export default editTodoForm;
