import state from ".";
import onChange from "./onChange";
import Project from "./Project";
import Todo from "./Todo";

const submits = (function () {
    "use strict";

    function newProjectSubmit(e) {
        e.preventDefault();
        let title = e.target.title.value;
        if (title != "" && !projects[title]) {
            state.projects[title] = new Project(title);
        }
        state.currentProject = state.projects[title];
        onChange();
    }

    function newTodoSubmit(e) {
        e.preventDefault();
        let title = e.target.title.value;
        let description = e.target.description.value;
        let dueDate = e.target.dueDate.value;
        let priority = e.target.priority.value;
        if (
            title != "" &&
            state.currentProject != null &&
            !state.currentProject.todos[title]
        ) {
            state.currentProject.todos[title] = new Todo(
                title,
                description,
                dueDate,
                priority
            );
        }
        onChange();
    }

    function editTodoSubmit(e) {
        e.preventDefault();
        let id = e.target.id.split("-");
        let oldTitle = id[2];
        console.log(e.target);
        let title = e.target.title.value;
        let description = e.target.description.value;
        let dueDate = e.target.dueDate.value;
        let priority = e.target.priority.value;
        // console.log(`${title} ${description} ${dueDate} ${priority}`);
        if (title != "" && state.currentProject != null) {
            delete state.currentProject.todos[oldTitle];
            state.currentProject.todos[title] = new Todo(
                title,
                description,
                dueDate,
                priority
            );
        }
        onChange();
    }

    return {
        newProjectSubmit: newProjectSubmit,
        newTodoSubmit: newTodoSubmit,
        editTodoSubmit: editTodoSubmit,
    };
})();

export default submits;
