import state from ".";
import renderProjects from "./renderProjects";
import renderTodos from "./renderTodos";

const onChange = () => {
    renderProjects();
    renderTodos();
    localStorage.projects = JSON.stringify(state.projects);
};

export default onChange;
