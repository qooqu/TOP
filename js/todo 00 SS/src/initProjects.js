const initProjects = () => {

    let projects;

    if (localStorage.projects) {
        // let libraryJSON = localStorage.library.replace(/},/g, '}},').split('},');
        // library = libraryJSON.map(book => JSON.parse(book));
    } else {
        projects = {};
    }

    return projects;
}

export default initProjects