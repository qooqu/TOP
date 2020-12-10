import state from "./index";
import clearList from "./clearList";
import liProject from "./liProject";

const renderProjects = () => {
    // console.log(`hello ${state.currentProject}`);
    let projectsSorted = Object.keys(state.projects)
        .sort()
        .map((key) => state.projects[key]);
    clearList(state.projectList);
    projectsSorted.forEach((project) => {
        state.projectList.appendChild(liProject(project, "select", "remove"));
    });
};

export default renderProjects;
