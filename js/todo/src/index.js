import initProjects from './initProjects';
import Project from './Project';
import Todo from './Todo';
import renderProjects from './renderProjects';
import renderTodos from './renderTodos';

let projectForm = document.getElementById("new-project");
projectForm.addEventListener('submit', newProjectSubmit, true);

let todoForm = document.getElementById("new-todo");
todoForm.addEventListener('submit', newTodoSubmit, true);

// let projectsDiv = document.getElementById("projects");
// let todosDiv = document.getElementById("todos");

const projectList = document.getElementById('project-list');
const todoList = document.getElementById('todo-list');

// let projects = initProjects();

let state = {
    projects: initProjects(),
    currentProject: null,
    projectList: projectList,
    todoList: todoList
};

// let currentProject;

function newProjectSubmit(e) {
    e.preventDefault();
    let title = e.target.title.value;
    if (title != '' && !projects[title]) {
        state.projects[title] = new Project(title);
    }
    state.currentProject = state.projects[title];
    renderProjects();
    renderTodos();
};

function newTodoSubmit(e) {
    e.preventDefault();
    let title = e.target.title.value;
    let description = e.target.description.value;
    let dueDate = e.target.dueDate.value;
    let priority = e.target.priority.value;
    if (title != '' && !state.currentProject.todos[title]) {
        state.currentProject.todos[title] = new Todo(title, description, dueDate, priority);
    }
    renderTodos();
};

export default state