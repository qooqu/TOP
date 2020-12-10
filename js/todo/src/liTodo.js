import handleClick from "./handleClick";

const liTodo = (todo, ...btns) => {
    let li = document.createElement("li");
    li.setAttribute("id", `todo-li-${todo.title}`);
    let liTxt = document.createElement("span");
    liTxt.textContent = `${todo.title} ${todo.description}`;
    let liTxtDtls = document.createElement("span");
    liTxtDtls.setAttribute("id", `todo-dtls-${todo.title}`);
    liTxtDtls.textContent = ` ${todo.dueDate} ${todo.priority}`;
    liTxtDtls.classList.add("hidden");
    li.appendChild(liTxt);
    li.appendChild(liTxtDtls);

    btns.forEach((action) => {
        let liBtn = document.createElement("button");
        liBtn.setAttribute("id", `todo-${action}-${todo.title}`);
        liBtn.textContent = action;
        liBtn.addEventListener("click", handleClick);
        li.appendChild(liBtn);
    });

    return li;
};

export default liTodo;
