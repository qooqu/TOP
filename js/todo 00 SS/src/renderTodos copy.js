import handleClick from './handleClick';

const renderTodos = (currentProject, todoList) => {
    while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild);
    }
    let todos = currentProject.todos;
    // let todosSorted = Object.keys(todos).sort().map(key => todos[key]);
    let todosSorted = todos;
    todosSorted.forEach(todo => {
        let li = document.createElement('li');
        let liTxt = document.createElement('span');
        let liBtnEdit = document.createElement('button');
        let liBtnDel = document.createElement('button');
        liTxt.textContent = `${todo.title}`;
        liBtnEdit.textContent = 'edit';
        liBtnDel.textContent = 'remove';
        liBtnEdit.setAttribute('id', `todo-edit-${currentProject.name}-${todo.title}`);
        liBtnDel.setAttribute('id', `todo-delete-${currentProject.name}-${todo.title}`);
        liBtnEdit.addEventListener('click', handleClick);
        liBtnDel.addEventListener('click', handleClick);
        li.appendChild(liTxt);
        li.appendChild(liBtnEdit);
        li.appendChild(liBtnDel);
        todoList.appendChild(li);
    });
}

export default renderTodos