import "./style.css";
import Icon from "./icon.png";
import printMe from "./print.js";

// const container = document.getElementById("container");
const container = document.createElement("div");
container.id = "container";
document.body.appendChild(container);

container.textContent = "yo";

const myIcon = new Image();
myIcon.src = Icon;
container.appendChild(myIcon);

const btn = document.createElement("button");
btn.innerHTML = "Click me and check the console!";
btn.onclick = printMe;
container.appendChild(btn);
