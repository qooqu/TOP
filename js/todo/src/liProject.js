import state from "./index";
import handleClick from "./handleClick";

const liProject = (project, ...btns) => {
    let li = document.createElement("li");
    let liTxt = document.createElement("span");
    liTxt.textContent = project.title;
    if (state.currentProject.title == project.title) {
        liTxt.style.fontWeight = "bold";
    }
    li.appendChild(liTxt);

    btns.forEach((action) => {
        let liBtn = document.createElement("button");
        liBtn.setAttribute("id", `project-${action}-${project.title}`);
        liBtn.textContent = action;
        liBtn.addEventListener("click", handleClick);
        li.appendChild(liBtn);
    });

    return li;
};

export default liProject;
