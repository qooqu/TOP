import initProjects from "./initProjects";
import submits from "./submits";
import onChange from "./onChange";

let projectForm = document.getElementById("new-project");
projectForm.addEventListener("submit", submits.newProjectSubmit, true);

let todoForm = document.getElementById("new-todo");
todoForm.addEventListener("submit", submits.newTodoSubmit, true);

const projectList = document.getElementById("project-list");
const todoList = document.getElementById("todo-list");

let state = {
    projects: null,
    currentProject: null,
    projectList: projectList,
    todoList: todoList,
};

export default state;

initProjects();
onChange();
