import state from './index';
import clearList from './clearList';
import newLI from './newLI';

const renderProjects = () => {
    // console.log(`hello ${state.currentProject}`);
    let projectsSorted = Object.keys(state.projects).sort().map(key => state.projects[key]);
    clearList(state.projectList);
    projectsSorted.forEach(project => {
        state.projectList.appendChild(newLI('project', project.title, 'select', 'remove'));
    });
}

export default renderProjects