import state from ".";

const initProjects = () => {
    if (localStorage.projects) {
        state.projects = JSON.parse(localStorage.projects);
        state.currentProject =
            state.projects[Object.keys(state.projects).sort()[0]];
        // console.log();
        // let projectsSorted = Object.keys(projects)
        //     .sort()
        //     .map((key) => state.projects[key]);
        // state.currentProject = projectsSorted[0];
    } else {
        state.projects = {};
    }
};

export default initProjects;
