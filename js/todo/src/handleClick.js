import editTodoForm from "./editTodoForm";
import state from "./index";
import onChange from "./onChange";

function handleClick(e) {
    e.preventDefault();
    let id = e.target.id.split("-");
    let type = id[0];
    let action = id[1];
    let title = id[2];

    if (type == "project") {
        if (action == "select") {
            state.currentProject = state.projects[title];
            onChange();
        }
        if (action == "remove") {
            if (title == state.currentProject.title) {
                delete state.projects[title];
                state.currentProject =
                    state.projects[Object.keys(state.projects).sort()[0]];
            } else {
                delete state.projects[title];
            }
            onChange();
        }
    }

    if (type == "todo") {
        let todo = state.currentProject.todos[title];
        if (action == "details") {
            let liTxtDtls = document.getElementById(`todo-dtls-${todo.title}`);
            liTxtDtls.classList.toggle("hidden");
        }
        if (action == "edit") {
            let li = document.getElementById(`todo-li-${todo.title}`);
            let children = li.querySelectorAll("*");
            children.forEach((child) => child.remove());
            li.appendChild(editTodoForm(todo));
        }
        if (action == "remove") {
            delete state.currentProject.todos[title];
            onChange();
        }
    }
}

export default handleClick;
