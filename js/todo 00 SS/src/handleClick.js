import state from './index';
import renderProjects from './renderProjects';
import renderTodos from './renderTodos';

function handleClick(e) {
    e.preventDefault();
    let id = e.target.id.split('-');
    let type = id[0];
    let event = id[1];

    if (type == 'project') {
        let title = id[2];
        if (event == 'select') {
            state.currentProject = state.projects[title];
            renderTodos();
        }
        if (event == 'remove') {
            if (state.projects[title].title == state.currentProject.title) {
                state.currentProject = null;
            }
            delete state.projects[title];
            renderProjects();
        }
    }

    if (type == 'todo') {
        let projectTitle = id[2];
        let title = id[3];
        if (event == 'edit') {
            console.log(edit);
        }
        if (event == 'remove') {
            // delete state.projects[projectTitle].todos[];
            renderTodos();
        }
    }

};

export default handleClick